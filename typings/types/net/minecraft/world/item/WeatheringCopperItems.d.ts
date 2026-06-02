import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { WeatheringCopperBlocks } from '../../../../net/minecraft/world/level/block/WeatheringCopperBlocks.d.ts'
export class WeatheringCopperItems extends Record {
    static create(paramblocks: WeatheringCopperBlocks, paramitemFactory: (param0: Block) => Item): WeatheringCopperItems;
    constructor(unaffected: Item, exposed: Item, weathered: Item, oxidized: Item, waxed: Item, waxedExposed: Item, waxedWeathered: Item, waxedOxidized: Item)
    // private exposed: Item;
    // private oxidized: Item;
    // private unaffected: Item;
    // private waxed: Item;
    // private waxedExposed: Item;
    // private waxedOxidized: Item;
    // private waxedWeathered: Item;
    // private weathered: Item;
    equals(o: Object | null): boolean;
    exposed(): Item;
    forEach(consumer: (param0: Item) => void): void;
    hashCode(): number;
    oxidized(): Item;
    toString(): string;
    unaffected(): Item;
    waxed(): Item;
    waxedExposed(): Item;
    waxedMapping(): Map<Item, Item>;
    waxedOxidized(): Item;
    waxedWeathered(): Item;
    weathered(): Item;
}