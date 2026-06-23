import type { CollectSpliterators$FlatMapSpliteratorOfPrimitive } from '../../../../com/google/common/collect/CollectSpliterators$FlatMapSpliteratorOfPrimitive.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Spliterator$OfInt } from '../../../../java/util/Spliterator$OfInt.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollectSpliterators$FlatMapSpliteratorOfInt<InElementT extends unknown> extends CollectSpliterators$FlatMapSpliteratorOfPrimitive<InElementT, number, (param0: number) => void, Spliterator$OfInt> implements Spliterator$OfInt {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(prefix: Spliterator$OfInt, from: Spliterator<InElementT>, function_: (param0: InElementT) => Spliterator$OfInt, characteristics: number, estimatedSize: number)
    forEachRemaining(arg0: (param0: number) => void): void;
    tryAdvance(arg0: (param0: number) => void): boolean;
}