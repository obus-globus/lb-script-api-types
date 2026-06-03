import type { IntConsumer } from '../../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer as IntConsumer_2 } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntIterators$ArrayIterator extends Object implements IntListIterator {
    constructor(arg0: number[], arg1: number, arg2: number)
    // private array: number[];
    // private curr: number;
    // private length: number;
    // private offset: number;
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    nextInt(): number;
    previous(): number;
    previousIndex(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
    skip(arg0: number): number;
}