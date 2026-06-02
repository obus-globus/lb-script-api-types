import type { Int2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2IntAVLTreeMap$KeyIterator extends Int2IntAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2IntAVLTreeMap$KeyIterator)
    constructor(null_: Int2IntAVLTreeMap$KeyIterator, arg1: number)
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