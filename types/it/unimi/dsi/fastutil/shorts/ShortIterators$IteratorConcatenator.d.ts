import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortIterators$IteratorConcatenator extends Object implements ShortIterator {
    constructor(arg0: ShortIterator[], arg1: number, arg2: number)
    // private a: ShortIterator[];
    // private lastOffset: number;
    // private length: number;
    // private offset: number;
    // private advance(): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextShort(): number;
    remove(): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
}