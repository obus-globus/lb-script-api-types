import type { DoubleBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBidirectionalIterator.d.ts'
import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer as DoubleConsumer_2 } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleIterators$UnmodifiableBidirectionalIterator extends Object implements DoubleBidirectionalIterator {
    constructor(arg0: DoubleBidirectionalIterator)
    // private i: DoubleBidirectionalIterator;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    skip(arg0: number): number;
}