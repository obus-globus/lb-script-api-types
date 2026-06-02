import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class RegistryExtensionsKt extends Object {
    static asComparator(paramarg0: (Object | null)[]): (param0: Object | null) => kotlin.Boolean;
    static blockSortedSetOf(): Block[];
    static blockSortedSetOf(paramarg0: (Object | null)[]): Block[];
    static itemSortedSetOf(): Item[];
    static itemSortedSetOf(paramarg0: (Object | null)[]): Item[];
}