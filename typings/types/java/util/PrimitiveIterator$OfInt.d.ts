import type { PrimitiveIterator } from '../../java/util/PrimitiveIterator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface PrimitiveIterator$OfInt extends PrimitiveIterator<number, (param0: number) => void>, Object{
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextInt(): number;
}