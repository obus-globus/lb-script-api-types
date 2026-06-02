import type { Int2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2ShortAVLTreeMap$KeyIterator extends Int2ShortAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: Int2ShortAVLTreeMap$KeyIterator)
    constructor(null_: Int2ShortAVLTreeMap$KeyIterator, arg1: number)
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