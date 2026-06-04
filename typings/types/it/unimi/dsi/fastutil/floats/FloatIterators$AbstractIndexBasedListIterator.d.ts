import type { FloatIterators$AbstractIndexBasedIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterators$AbstractIndexBasedIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export abstract class FloatIterators$AbstractIndexBasedListIterator extends FloatIterators$AbstractIndexBasedIterator implements FloatListIterator {
    constructor(arg0: number, arg1: number)
    add(arg0: number): void;
    add(arg0: number, arg1: number): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    previous(): number;
    previousFloat(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number, arg1: number): void;
}