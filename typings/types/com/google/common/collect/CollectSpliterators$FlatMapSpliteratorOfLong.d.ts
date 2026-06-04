import type { CollectSpliterators$FlatMapSpliteratorOfPrimitive } from '../../../../com/google/common/collect/CollectSpliterators$FlatMapSpliteratorOfPrimitive.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Spliterator$OfLong } from '../../../../java/util/Spliterator$OfLong.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { LongConsumer } from '../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollectSpliterators$FlatMapSpliteratorOfLong<InElementT extends Object | number | string | boolean> extends CollectSpliterators$FlatMapSpliteratorOfPrimitive<InElementT, number, (param0: number) => void, Spliterator$OfLong> implements Spliterator$OfLong {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(prefix: Spliterator$OfLong, from: Spliterator<InElementT>, function_: (param0: InElementT) => Spliterator$OfLong, characteristics: number, estimatedSize: number)
    forEachRemaining(arg0: (param0: number) => void): void;
    tryAdvance(arg0: (param0: number) => void): boolean;
}