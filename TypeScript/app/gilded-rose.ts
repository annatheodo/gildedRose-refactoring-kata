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

      if (item.name === "Aged Brie") {
        this.increaseQuality(item);
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstagePasses(item);
      } else if (item.name === "Sulfuras, Hand of Ragnaros") {
        item.quality = 80;
      } else if (item.name === "Conjured") {
        this.decreaseQuality(item, DEFAULT_QUALITY_AMOUNT * 2);
      } else {
        this.decreaseQuality(item);
      }

      this.decreaseSellIn(item);
    }

    return this.items;
  }

  private decreaseSellIn(item: Item) {
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn -= 1;
    }
  }

  private increaseQuality(item: Item, amount = DEFAULT_QUALITY_AMOUNT) {
    item.quality = Math.max(item.quality + amount, MAX_QUALITY);
  }

  private decreaseQuality(item: Item, amount = DEFAULT_QUALITY_AMOUNT) {
    item.quality = Math.min(item.quality - amount, MIN_QUALITY);
  }

  private updateAgedBrie(item: Item) {
    this.decreaseSellIn(item);
    this.increaseQuality(item);

    if (item.sellIn < 0) {
      this.increaseQuality(item);
    }
  }

  private updateBackstagePasses(item: Item) {
    this.decreaseSellIn(item);

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
