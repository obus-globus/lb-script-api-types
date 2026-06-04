import type { Int2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Int2LongAVLTreeMap$ValueIterator extends Int2LongAVLTreeMap$TreeIterator implements LongListIterator {
    private constructor(null_: Int2LongAVLTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}