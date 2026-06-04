import type { IntConsumer } from '../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { IntIterator } from '../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Divisor extends Object implements IntIterator {
    static asIterable(paramnumerator: number, paramdenominator: number): number[];
    constructor(numerator: number, denominator: number)
    // private denominator: number;
    // private mod: number;
    // private quotient: number;
    // private remainder: number;
    // private returnedParts: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextInt(): number;
    skip(arg0: number): number;
}