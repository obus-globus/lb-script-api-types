import type { Long2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2ShortRBTreeMap$KeyIterator extends Long2ShortRBTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2ShortRBTreeMap$KeyIterator)
    constructor(null_: Long2ShortRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}