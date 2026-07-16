import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanIterators$ArrayIterator extends Object implements BooleanListIterator {
    constructor(arg0: boolean[], arg1: number, arg2: number)
    // private array: boolean[];
    // private curr: number;
    // private length: number;
    // private offset: number;
    add(arg0: boolean): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): boolean;
    nextBoolean(): boolean;
    nextIndex(): number;
    previous(): boolean;
    previousBoolean(): boolean;
    previousIndex(): number;
    remove(): void;
    set(arg0: boolean): void;
    skip(arg0: number): number;
}