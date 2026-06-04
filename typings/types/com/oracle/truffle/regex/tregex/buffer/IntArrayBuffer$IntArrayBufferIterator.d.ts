import type { PrimitiveIterator$OfInt } from '../../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IntArrayBuffer$IntArrayBufferIterator extends Object implements PrimitiveIterator$OfInt {
    private constructor(buf: number[], size: number)
    // private buf: number[];
    // private i: number;
    // private size: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextInt(): number;
}