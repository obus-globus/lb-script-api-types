import type { Int2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Int2LongRBTreeMap$ValueIterator extends Int2LongRBTreeMap$TreeIterator implements LongListIterator {
    private constructor(null_: Int2LongRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}