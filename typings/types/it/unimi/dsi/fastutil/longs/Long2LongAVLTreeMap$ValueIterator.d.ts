import type { Long2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2LongAVLTreeMap$ValueIterator extends Long2LongAVLTreeMap$TreeIterator implements LongListIterator {
    private constructor(null_: Long2LongAVLTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}