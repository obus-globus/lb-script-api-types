import type { Int2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2DoubleRBTreeMap$KeyIterator extends Int2DoubleRBTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2DoubleRBTreeMap$KeyIterator)
    constructor(null_: Int2DoubleRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}