import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Mutable128BitSet$Mutable128BitSetIterator extends Object implements PrimitiveIterator$OfInt {
    constructor(set: number[], lo: number, hi: number)
    // private curWord: number;
    // private i: number;
    // private nextWord: number;
    // private set: number[];
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextInt(): number;
    remove(): void;
}