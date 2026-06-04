import type { Int2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2ObjectAVLTreeMap$KeyIterator extends Int2ObjectAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2ObjectAVLTreeMap$KeyIterator)
    constructor(null_: Int2ObjectAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}