import type { CollectSpliterators$FlatMapSpliterator } from '../../../../com/google/common/collect/CollectSpliterators$FlatMapSpliterator.d.ts'
import type { CollectSpliterators$FlatMapSpliterator$Factory } from '../../../../com/google/common/collect/CollectSpliterators$FlatMapSpliterator$Factory.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Spliterator$OfPrimitive } from '../../../../java/util/Spliterator$OfPrimitive.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CollectSpliterators$FlatMapSpliteratorOfPrimitive<InElementT extends Object | number | string | boolean, OutElementT extends Object | number | string | boolean, OutConsumerT extends Object | number | string | boolean, OutSpliteratorT extends Spliterator$OfPrimitive<OutElementT, OutConsumerT, OutSpliteratorT>> extends CollectSpliterators$FlatMapSpliterator<InElementT, OutElementT, OutSpliteratorT> implements Spliterator$OfPrimitive<OutElementT, OutConsumerT, OutSpliteratorT> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(prefix: OutSpliteratorT, from: Spliterator<InElementT>, function_: (param0: InElementT) => OutSpliteratorT, factory: CollectSpliterators$FlatMapSpliterator$Factory<InElementT, OutSpliteratorT>, characteristics: number, estimatedSize: number)
    forEachRemaining(action: OutConsumerT): void;
    forEachRemaining<T_CONS extends Object | number | string | boolean>(arg0: T_CONS): void;
    tryAdvance(action: OutConsumerT): boolean;
}