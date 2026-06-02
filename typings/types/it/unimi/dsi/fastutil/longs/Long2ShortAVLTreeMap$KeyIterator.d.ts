import type { Long2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2ShortAVLTreeMap$KeyIterator extends Long2ShortAVLTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: Long2ShortAVLTreeMap$KeyIterator)
    constructor(null_: Long2ShortAVLTreeMap$KeyIterator, arg1: number)
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