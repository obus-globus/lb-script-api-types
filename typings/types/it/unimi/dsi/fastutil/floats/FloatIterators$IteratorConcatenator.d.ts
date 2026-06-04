import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatIterators$IteratorConcatenator extends Object implements FloatIterator {
    constructor(arg0: FloatIterator[], arg1: number, arg2: number)
    // private a: FloatIterator[];
    // private lastOffset: number;
    // private length: number;
    // private offset: number;
    // private advance(): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextFloat(): number;
    remove(): void;
    skip(arg0: number): number;
}