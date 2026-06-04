import type { Long2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2CharAVLTreeMap$KeyIterator extends Long2CharAVLTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2CharAVLTreeMap$KeyIterator)
    constructor(null_: Long2CharAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}