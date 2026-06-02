import type { Int2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2ReferenceAVLTreeMap$KeyIterator extends Int2ReferenceAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2ReferenceAVLTreeMap$KeyIterator)
    constructor(null_: Int2ReferenceAVLTreeMap$KeyIterator, arg1: number)
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