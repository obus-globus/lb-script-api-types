import type { Long2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2ObjectAVLTreeMap$KeyIterator extends Long2ObjectAVLTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2ObjectAVLTreeMap$KeyIterator)
    constructor(null_: Long2ObjectAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}