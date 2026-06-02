import type { Long2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2ByteAVLTreeMap$KeyIterator extends Long2ByteAVLTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2ByteAVLTreeMap$KeyIterator)
    constructor(null_: Long2ByteAVLTreeMap$KeyIterator, arg1: number)
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