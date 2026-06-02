import type { Long2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2ReferenceRBTreeMap$KeyIterator extends Long2ReferenceRBTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2ReferenceRBTreeMap$KeyIterator)
    constructor(null_: Long2ReferenceRBTreeMap$KeyIterator, arg1: number)
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