import type { Int2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2CharAVLTreeMap$KeyIterator extends Int2CharAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2CharAVLTreeMap$KeyIterator)
    constructor(null_: Int2CharAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}