import type { IntBigListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBigListIterator.d.ts'
import type { IntBigListIterators$AbstractIndexBasedBigIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBigListIterators$AbstractIndexBasedBigIterator.d.ts'
export abstract class IntBigListIterators$AbstractIndexBasedBigListIterator extends IntBigListIterators$AbstractIndexBasedBigIterator implements IntBigListIterator {
    constructor(arg0: number, arg1: number)
    add(arg0: number): void;
    add(arg0: number, arg1: number): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    nextIndex(): number;
    previousIndex(): number;
    previousInt(): number;
    set(arg0: number): void;
    set(arg0: number, arg1: number): void;
    skip(arg0: number): number;
}