export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export class GildedRose {
  constructor(public items: Item[] = []) {}

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.name === "Aged Brie") {
        this.updateAgedBrie(item);
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstagePasses(item);
      } else if (item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      } else if (item.name === "Conjured") {
        this.updateConjured(item);
      } else {
        this.updateNormalItem(item);
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

  private increaseQuality(item: Item, amount = 1) {
    item.quality = Math.max(item.quality + amount, 50);
  }

  private decreaseQuality(item: Item, amount = 1) {
    item.quality = Math.min(item.quality - amount, 0);
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
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      this.increaseQuality(item, 3);
    } else if (item.sellIn <= 10) {
      this.increaseQuality(item, 2);
    } else {
      this.increaseQuality(item);
    }
  }

  private updateConjured(item: Item) {
    this.decreaseSellIn(item);
    this.decreaseQuality(item, 2);
  }

  private updateNormalItem(item: Item) {
    this.decreaseSellIn(item);
    this.decreaseQuality(item);

    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }
}
