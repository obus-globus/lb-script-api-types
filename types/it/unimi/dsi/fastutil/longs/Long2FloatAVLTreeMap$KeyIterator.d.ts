import type { Long2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2FloatAVLTreeMap$KeyIterator extends Long2FloatAVLTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2FloatAVLTreeMap$KeyIterator)
    constructor(null_: Long2FloatAVLTreeMap$KeyIterator, arg1: number)
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