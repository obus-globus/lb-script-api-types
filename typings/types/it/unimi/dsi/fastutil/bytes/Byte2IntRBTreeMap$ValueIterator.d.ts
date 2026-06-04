import type { Byte2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Byte2IntRBTreeMap$ValueIterator extends Byte2IntRBTreeMap$TreeIterator implements IntListIterator {
    private constructor(null_: Byte2IntRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}