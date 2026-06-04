import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { PrimitiveIterator$OfDouble } from '../../../../../java/util/PrimitiveIterator$OfDouble.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatIterators$PrimitiveIteratorWrapper extends Object implements FloatIterator {
    constructor(arg0: PrimitiveIterator$OfDouble)
    // private i: PrimitiveIterator$OfDouble;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextFloat(): number;
    remove(): void;
    skip(arg0: number): number;
}