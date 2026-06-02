import type { Int2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2IntRBTreeMap$KeyIterator extends Int2IntRBTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2IntRBTreeMap$KeyIterator)
    constructor(null_: Int2IntRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}