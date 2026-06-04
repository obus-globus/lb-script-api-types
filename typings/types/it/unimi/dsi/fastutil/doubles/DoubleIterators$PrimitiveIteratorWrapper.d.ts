import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { PrimitiveIterator$OfDouble } from '../../../../../java/util/PrimitiveIterator$OfDouble.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer as DoubleConsumer_2 } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleIterators$PrimitiveIteratorWrapper extends Object implements DoubleIterator {
    constructor(arg0: PrimitiveIterator$OfDouble)
    // private i: PrimitiveIterator$OfDouble;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextDouble(): number;
    remove(): void;
    skip(arg0: number): number;
}