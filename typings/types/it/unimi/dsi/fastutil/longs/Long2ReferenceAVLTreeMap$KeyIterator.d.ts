import type { Long2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2ReferenceAVLTreeMap$KeyIterator extends Long2ReferenceAVLTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2ReferenceAVLTreeMap$KeyIterator)
    constructor(null_: Long2ReferenceAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}