import type { DoubleIterators$AbstractIndexBasedIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterators$AbstractIndexBasedIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
export abstract class DoubleIterators$AbstractIndexBasedListIterator extends DoubleIterators$AbstractIndexBasedIterator implements DoubleListIterator {
    constructor(arg0: number, arg1: number)
    add(arg0: number): void;
    add(arg0: number, arg1: number): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    previous(): number;
    previousDouble(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number, arg1: number): void;
}