import type { Int2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2ReferenceRBTreeMap$KeyIterator extends Int2ReferenceRBTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2ReferenceRBTreeMap$KeyIterator)
    constructor(null_: Int2ReferenceRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}