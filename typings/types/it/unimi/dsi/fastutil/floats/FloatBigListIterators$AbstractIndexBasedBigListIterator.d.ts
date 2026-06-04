import type { FloatBigListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBigListIterator.d.ts'
import type { FloatBigListIterators$AbstractIndexBasedBigIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBigListIterators$AbstractIndexBasedBigIterator.d.ts'
export abstract class FloatBigListIterators$AbstractIndexBasedBigListIterator extends FloatBigListIterators$AbstractIndexBasedBigIterator implements FloatBigListIterator {
    constructor(arg0: number, arg1: number)
    add(arg0: number): void;
    add(arg0: number, arg1: number): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    nextIndex(): number;
    previousFloat(): number;
    previousIndex(): number;
    set(arg0: number): void;
    set(arg0: number, arg1: number): void;
    skip(arg0: number): number;
}