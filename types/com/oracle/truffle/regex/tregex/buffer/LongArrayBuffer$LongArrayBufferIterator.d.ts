import type { PrimitiveIterator$OfLong } from '../../../../../../java/util/PrimitiveIterator$OfLong.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer } from '../../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LongArrayBuffer$LongArrayBufferIterator extends Object implements PrimitiveIterator$OfLong {
    private constructor(buf: number[], size: number)
    // private buf: number[];
    // private i: number;
    // private size: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextLong(): number;
}