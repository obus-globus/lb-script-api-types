import type { BooleanBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBidirectionalIterator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanIterators$UnmodifiableBidirectionalIterator extends Object implements BooleanBidirectionalIterator {
    constructor(arg0: BooleanBidirectionalIterator)
    // private i: BooleanBidirectionalIterator;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    skip(arg0: number): number;
}