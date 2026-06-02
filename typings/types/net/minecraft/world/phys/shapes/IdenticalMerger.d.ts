import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IndexMerger } from '../../../../../net/minecraft/world/phys/shapes/IndexMerger.d.ts'
import type { IndexMerger$IndexConsumer } from '../../../../../net/minecraft/world/phys/shapes/IndexMerger$IndexConsumer.d.ts'
export class IdenticalMerger extends Object implements IndexMerger {
    constructor(coords: (Object | null)[])
    // private coords: (Object | null)[];
    forMergedIndexes(consumer: IndexMerger$IndexConsumer): boolean;
    getList(): (Object | null)[];
    size(): number;
}