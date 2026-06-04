import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Abstract128BitSet$Abstract128BitSetIterator extends Object implements PrimitiveIterator$OfInt {
    constructor(lo: number, hi: number)
    // private curWord: number;
    // private i: number;
    // private nextWord: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextInt(): number;
}