import type { Int2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2ByteAVLTreeMap$KeyIterator extends Int2ByteAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2ByteAVLTreeMap$KeyIterator)
    constructor(null_: Int2ByteAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}