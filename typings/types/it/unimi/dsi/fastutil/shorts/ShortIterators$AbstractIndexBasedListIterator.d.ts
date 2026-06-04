import type { ShortIterators$AbstractIndexBasedIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterators$AbstractIndexBasedIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export abstract class ShortIterators$AbstractIndexBasedListIterator extends ShortIterators$AbstractIndexBasedIterator implements ShortListIterator {
    constructor(arg0: number, arg1: number)
    add(arg0: number, arg1: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    previous(): number;
    previousIndex(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number, arg1: number): void;
    set(arg0: number): void;
}