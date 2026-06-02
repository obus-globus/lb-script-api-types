import type { Long2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2ObjectRBTreeMap$KeyIterator extends Long2ObjectRBTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2ObjectRBTreeMap$KeyIterator)
    constructor(null_: Long2ObjectRBTreeMap$KeyIterator, arg1: number)
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