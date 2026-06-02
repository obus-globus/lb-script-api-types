import type { LongBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongIterators$UnmodifiableBidirectionalIterator extends Object implements LongBidirectionalIterator {
    constructor(arg0: LongBidirectionalIterator)
    // private i: LongBidirectionalIterator;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    skip(arg0: number): number;
}