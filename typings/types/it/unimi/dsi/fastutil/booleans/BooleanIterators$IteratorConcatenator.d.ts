import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanIterators$IteratorConcatenator extends Object implements BooleanIterator {
    constructor(arg0: BooleanIterator[], arg1: number, arg2: number)
    // private a: BooleanIterator[];
    // private lastOffset: number;
    // private length: number;
    // private offset: number;
    // private advance(): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    next(): boolean;
    nextBoolean(): boolean;
    remove(): void;
    skip(arg0: number): number;
}