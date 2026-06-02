import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IndexMerger } from '../../../../../../../net/minecraft/world/phys/shapes/IndexMerger.d.ts'
import type { IndexMerger$IndexConsumer } from '../../../../../../../net/minecraft/world/phys/shapes/IndexMerger$IndexConsumer.d.ts'
export class LithiumDoublePairList extends Object implements IndexMerger {
    constructor(arg0: (Object | null)[], arg1: (Object | null)[], arg2: boolean, arg3: boolean)
    // private indicesFirst: number[];
    // private indicesSecond: number[];
    // private merged: number[];
    // private pairs: (Object | null)[];
    forMergedIndexes(arg0: IndexMerger$IndexConsumer): boolean;
    getList(): (Object | null)[];
    // private merge(arg0: number[], arg1: number[], arg2: number, arg3: number, arg4: boolean, arg5: boolean): void;
    size(): number;
}