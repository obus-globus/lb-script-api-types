import type { BooleanIterators$AbstractIndexBasedIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterators$AbstractIndexBasedIterator.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
export abstract class BooleanIterators$AbstractIndexBasedListIterator extends BooleanIterators$AbstractIndexBasedIterator implements BooleanListIterator {
    constructor(arg0: number, arg1: number)
    add(arg0: boolean): void;
    add(arg0: number, arg1: boolean): void;
    add(arg0: boolean): void;
    add(arg0: boolean): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    next(): boolean;
    nextIndex(): number;
    previous(): boolean;
    previousBoolean(): boolean;
    previousIndex(): number;
    remove(): void;
    set(arg0: boolean): void;
    set(arg0: number, arg1: boolean): void;
    set(arg0: boolean): void;
    set(arg0: boolean): void;
}