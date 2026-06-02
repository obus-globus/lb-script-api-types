import type { Int2BooleanAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2BooleanAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Int2BooleanAVLTreeMap$TreeIterator)
    constructor(null_: Int2BooleanAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Int2BooleanAVLTreeMap$Entry;
    // private index: number;
    // private next: Int2BooleanAVLTreeMap$Entry;
    // private prev: Int2BooleanAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2BooleanAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2BooleanAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}