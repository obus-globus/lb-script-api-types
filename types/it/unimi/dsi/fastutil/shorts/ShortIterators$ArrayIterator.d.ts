import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortIterators$ArrayIterator extends Object implements ShortListIterator {
    constructor(arg0: number[], arg1: number, arg2: number)
    // private array: number[];
    // private curr: number;
    // private length: number;
    // private offset: number;
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    nextShort(): number;
    previous(): number;
    previousIndex(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
    skip(arg0: number): number;
}