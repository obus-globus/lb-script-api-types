import type { Long2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2LongRBTreeMap$KeyIterator extends Long2LongRBTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2LongRBTreeMap$KeyIterator)
    constructor(null_: Long2LongRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}