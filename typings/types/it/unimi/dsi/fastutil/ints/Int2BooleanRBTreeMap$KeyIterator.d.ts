import type { Int2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2BooleanRBTreeMap$KeyIterator extends Int2BooleanRBTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2BooleanRBTreeMap$KeyIterator)
    constructor(null_: Int2BooleanRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}