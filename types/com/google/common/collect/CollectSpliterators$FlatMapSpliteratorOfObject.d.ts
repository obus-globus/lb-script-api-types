import type { CollectSpliterators$FlatMapSpliterator } from '../../../../com/google/common/collect/CollectSpliterators$FlatMapSpliterator.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollectSpliterators$FlatMapSpliteratorOfObject<InElementT extends Object | number | string | boolean, OutElementT extends Object | number | string | boolean> extends CollectSpliterators$FlatMapSpliterator<InElementT, OutElementT, Spliterator<OutElementT>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(prefix: Spliterator<OutElementT>, from: Spliterator<InElementT>, function_: (param0: InElementT) => Spliterator<OutElementT>, characteristics: number, estimatedSize: number)
}