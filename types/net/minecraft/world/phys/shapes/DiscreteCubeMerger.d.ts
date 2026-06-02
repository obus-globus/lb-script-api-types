import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IndexMerger } from '../../../../../net/minecraft/world/phys/shapes/IndexMerger.d.ts'
import type { IndexMerger$IndexConsumer } from '../../../../../net/minecraft/world/phys/shapes/IndexMerger$IndexConsumer.d.ts'
export class DiscreteCubeMerger extends Object implements IndexMerger {
    constructor(firstSize: number, secondSize: number)
    // private firstDiv: number;
    // private result: (Object | null)[];
    // private secondDiv: number;
    forMergedIndexes(consumer: IndexMerger$IndexConsumer): boolean;
    getList(): (Object | null)[];
    size(): number;
}