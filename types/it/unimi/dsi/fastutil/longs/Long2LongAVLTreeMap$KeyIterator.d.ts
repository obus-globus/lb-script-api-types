import type { Long2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2LongAVLTreeMap$KeyIterator extends Long2LongAVLTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2LongAVLTreeMap$KeyIterator)
    constructor(null_: Long2LongAVLTreeMap$KeyIterator, arg1: number)
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