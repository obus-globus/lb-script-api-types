import type { LongIterators$AbstractIndexBasedIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterators$AbstractIndexBasedIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export abstract class LongIterators$AbstractIndexBasedListIterator extends LongIterators$AbstractIndexBasedIterator implements LongListIterator {
    constructor(arg0: number, arg1: number)
    add(arg0: number, arg1: number): void;
    add(arg0: number): void;
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    previous(): number;
    previousIndex(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number, arg1: number): void;
    set(arg0: number): void;
    set(arg0: number): void;
    set(arg0: number): void;
}