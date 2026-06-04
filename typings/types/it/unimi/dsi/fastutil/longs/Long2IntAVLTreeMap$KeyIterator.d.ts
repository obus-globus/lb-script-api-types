import type { Long2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2IntAVLTreeMap$KeyIterator extends Long2IntAVLTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2IntAVLTreeMap$KeyIterator)
    constructor(null_: Long2IntAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}