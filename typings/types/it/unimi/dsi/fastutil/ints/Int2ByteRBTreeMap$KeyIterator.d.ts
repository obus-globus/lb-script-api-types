import type { Int2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2ByteRBTreeMap$KeyIterator extends Int2ByteRBTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2ByteRBTreeMap$KeyIterator)
    constructor(null_: Int2ByteRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}