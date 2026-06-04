import type { Int2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2ObjectRBTreeMap$KeyIterator extends Int2ObjectRBTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2ObjectRBTreeMap$KeyIterator)
    constructor(null_: Int2ObjectRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}