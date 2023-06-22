import { Item } from "./item";
import {
  BACKSTAGE_PASSES_QUALITY_INCREASE_1,
  BACKSTAGE_PASSES_QUALITY_INCREASE_2,
  BACKSTAGE_PASSES_QUALITY_ZERO,
  BACKSTAGE_PASSES_SELLIN_THRESHOLD_1,
  BACKSTAGE_PASSES_SELLIN_THRESHOLD_2,
  DEFAULT_QUALITY_AMOUNT,
  MAX_QUALITY,
  MIN_QUALITY,
} from "./utils/constants";

export class GildedRose {
  constructor(public items: Item[] = []) {}

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      switch (true) {
        case item.name === "Aged Brie":
          this.increaseQuality(item);
          break;
        case item.name === "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(item);
          break;
        case item.name === "Sulfuras, Hand of Ragnaros":
          item.quality = 80;
          break;
        case item.name.includes("Conjured"):
          this.decreaseQuality(item, DEFAULT_QUALITY_AMOUNT * 2);
          break;
        default:
          this.decreaseQuality(item);
          break;
      }

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        this.decreaseSellIn(item);
        if (item.sellIn < 0) {
          this.decreaseQuality(item);
        }
      }
    }

    return this.items;
  }

  private decreaseSellIn(item: Item) {
    item.sellIn -= 1;
  }

  private increaseQuality(item: Item, amount = DEFAULT_QUALITY_AMOUNT) {
    item.quality = Math.max(
      MIN_QUALITY,
      Math.min(item.quality + amount, MAX_QUALITY)
    );
  }

  private decreaseQuality(item: Item, amount = DEFAULT_QUALITY_AMOUNT) {
    item.quality = Math.max(
      MIN_QUALITY,
      Math.min(item.quality - amount, MAX_QUALITY)
    );
  }

  private updateBackstagePasses(item: Item) {
    if (item.sellIn < 0) {
      item.quality = BACKSTAGE_PASSES_QUALITY_ZERO;
    } else if (item.sellIn <= BACKSTAGE_PASSES_SELLIN_THRESHOLD_1) {
      this.increaseQuality(item, BACKSTAGE_PASSES_QUALITY_INCREASE_1);
    } else if (item.sellIn <= BACKSTAGE_PASSES_SELLIN_THRESHOLD_2) {
      this.increaseQuality(item, BACKSTAGE_PASSES_QUALITY_INCREASE_2);
    } else {
      this.increaseQuality(item);
    }
  }
}
