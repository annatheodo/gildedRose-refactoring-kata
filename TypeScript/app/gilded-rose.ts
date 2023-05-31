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
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      } else if (item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      } else {
      }

      this.decreaseSellIn(item);

      // if (
      //   this.items[i].name != "Aged Brie" &&
      //   this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      // ) {
      //   if (this.items[i].quality > 0) {
      //     if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
      //       this.items[i].quality = this.items[i].quality - 1;
      //     }
      //   }
      // } else {
      //   if (this.items[i].quality < 50) {
      //     this.items[i].quality = this.items[i].quality + 1;
      //     if (
      //       this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
      //     ) {
      //       if (this.items[i].sellIn < 11) {
      //         if (this.items[i].quality < 50) {
      //           this.items[i].quality = this.items[i].quality + 1;
      //         }
      //       }
      //       if (this.items[i].sellIn < 6) {
      //         if (this.items[i].quality < 50) {
      //           this.items[i].quality = this.items[i].quality + 1;
      //         }
      //       }
      //     }
      //   }
      // }
      // if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
      //   this.items[i].sellIn = this.items[i].sellIn - 1;
      // }
      // if (this.items[i].sellIn < 0) {
      //   if (this.items[i].name != "Aged Brie") {
      //     if (
      //       this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      //     ) {
      //       if (this.items[i].quality > 0) {
      //         if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
      //           this.items[i].quality = this.items[i].quality - 1;
      //         }
      //       }
      //     } else {
      //       this.items[i].quality =
      //         this.items[i].quality - this.items[i].quality;
      //     }
      //   } else {
      //     if (this.items[i].quality < 50) {
      //       this.items[i].quality = this.items[i].quality + 1;
      //     }
      //   }
      // }
    }

    return this.items;
  }

  private decreaseSellIn(item: Item) {
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn -= 1;
    }
  }
}
