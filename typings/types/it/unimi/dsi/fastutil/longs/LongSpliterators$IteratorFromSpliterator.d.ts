import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { LongSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongSpliterators$IteratorFromSpliterator extends Object implements LongConsumer, LongIterator {
    constructor(arg0: LongSpliterator)
    // private hasPeeked: boolean;
    // private holder: number;
    // private spliterator: LongSpliterator;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextLong(): number;
    skip(arg0: number): number;
}