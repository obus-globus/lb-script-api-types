import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IndexMerger } from '../../../../../net/minecraft/world/phys/shapes/IndexMerger.d.ts'
import type { IndexMerger$IndexConsumer } from '../../../../../net/minecraft/world/phys/shapes/IndexMerger$IndexConsumer.d.ts'
export class IndirectMerger extends Object implements IndexMerger {
    constructor(first: (Object | null)[], second: (Object | null)[], firstOnlyMatters: boolean, secondOnlyMatters: boolean)
    // private firstIndices: number[];
    // private result: number[];
    // private resultLength: number;
    // private secondIndices: number[];
    forMergedIndexes(consumer: IndexMerger$IndexConsumer): boolean;
    getList(): (Object | null)[];
    size(): number;
}