import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class RegistryExtensionsKt extends Object {
    static asComparator<T extends unknown>(self: T[]): (param0: T, param1: T) => number;
    static blockSortedSetOf(): Block[];
    static blockSortedSetOf(...blocks: Block[]): Block[];
    static itemSortedSetOf(): Item[];
    static itemSortedSetOf(...items: Item[]): Item[];
}