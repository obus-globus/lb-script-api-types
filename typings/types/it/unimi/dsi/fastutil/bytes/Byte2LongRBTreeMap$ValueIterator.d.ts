import type { Byte2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Byte2LongRBTreeMap$ValueIterator extends Byte2LongRBTreeMap$TreeIterator implements LongListIterator {
    private constructor(null_: Byte2LongRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}