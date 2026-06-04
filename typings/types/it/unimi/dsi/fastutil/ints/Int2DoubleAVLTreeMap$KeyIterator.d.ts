import type { Int2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2DoubleAVLTreeMap$KeyIterator extends Int2DoubleAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2DoubleAVLTreeMap$KeyIterator)
    constructor(null_: Int2DoubleAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}