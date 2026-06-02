import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IndexMerger$IndexConsumer } from '../../../../../net/minecraft/world/phys/shapes/IndexMerger$IndexConsumer.d.ts'
export interface IndexMerger extends Object{
    forMergedIndexes(consumer: IndexMerger$IndexConsumer): boolean;
    getList(): (Object | null)[];
    size(): number;
}