import { GildedRose } from "@/gilded-rose";
import { Item } from "@/item";

describe("Gilded Rose", () => {
  it("should not return negative quality", () => {
    const item = new Item("Item", 10, 0);
    const gildedRose = new GildedRose([item]);
    gildedRose.updateQuality();
    expect(item.quality).toBe(0);
  });

  it("should be ensured that quality does not exceed 50", () => {
    const item = new Item("Item", 50, 55);
    const gildedRose = new GildedRose([item]);
    gildedRose.updateQuality();
    expect(item.quality).toBe(50);
  });

  it("should never alter sellIn and quality of Sulfuras", () => {
    const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 10, 30);
    const gildedRose = new GildedRose([sulfuras]);
    gildedRose.updateQuality();
    expect(sulfuras.sellIn).toBe(10);
    expect(sulfuras.quality).toBe(80);
  });

  it("should decrease normal items sellIn and quality for normal items", () => {
    const normalItem = new Item("Normal Item", 10, 20);
    const gildedRose = new GildedRose([normalItem]);
    gildedRose.updateQuality();
    expect(normalItem.sellIn).toBe(9);
    expect(normalItem.quality).toBe(19);
  });

    it("should decrease quality twice as fast if sellIn is negative", () => {
    const normalItem = new Item("Normal Item", 0, 20);
    const gildedRose = new GildedRose([normalItem]);
    gildedRose.updateQuality();
    expect(normalItem.quality).toBe(18);
  });

  it("should decrease quality of Conjured twice as fast as normal items", () => {
    const conjured = new Item("Conjured", 10, 20);
    const gildedRose = new GildedRose([conjured]);
    gildedRose.updateQuality();
    expect(conjured.quality).toBe(18);
  });

  it("should increase quality of Aged Brie", () => {
    const agedBrie = new Item("Aged Brie", 10, 30);
    const gildedRose = new GildedRose([agedBrie]);
    gildedRose.updateQuality();
    expect(agedBrie.quality).toBe(31);
  });

  it("should drop quality of Backstage passes to 0 when sellIn is negative", () => {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      -1,
      30
    );
    const gildedRose = new GildedRose([backstagePasses]);
    gildedRose.updateQuality();
    expect(backstagePasses.quality).toBe(0);
  });

  it("should increase quality of Backstage passes by 2 when sellIn is equal or less than 5", () => {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      30
    );
    const gildedRose = new GildedRose([backstagePasses]);
    gildedRose.updateQuality();
    expect(backstagePasses.quality).toBe(33);
  });

  it("should increase quality of Backstage passes by 2 when sellIn is equal or less than 10", () => {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      9,
      30
    );
    const gildedRose = new GildedRose([backstagePasses]);
    gildedRose.updateQuality();
    expect(backstagePasses.quality).toBe(32);
  });

  it("should increase quality of Backstage passes like for normal items if sellIn is greater than 10", () => {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      11,
      30
    );
    const gildedRose = new GildedRose([backstagePasses]);
    gildedRose.updateQuality();
    expect(backstagePasses.quality).toBe(31);
  });
});
