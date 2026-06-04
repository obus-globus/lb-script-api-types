import type { Long2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2IntRBTreeMap$KeyIterator extends Long2IntRBTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2IntRBTreeMap$KeyIterator)
    constructor(null_: Long2IntRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}