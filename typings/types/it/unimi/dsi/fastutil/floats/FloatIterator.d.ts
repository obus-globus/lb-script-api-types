import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { PrimitiveIterator } from '../../../../../java/util/PrimitiveIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatIterator extends PrimitiveIterator<number, (param0: number) => void>, Object {
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextFloat(): number;
    skip(arg0: number): number;
}