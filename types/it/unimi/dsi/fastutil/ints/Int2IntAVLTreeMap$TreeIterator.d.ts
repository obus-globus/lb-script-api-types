import type { Int2IntAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Int2IntAVLTreeMap$TreeIterator)
    constructor(null_: Int2IntAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Int2IntAVLTreeMap$Entry;
    // private index: number;
    // private next: Int2IntAVLTreeMap$Entry;
    // private prev: Int2IntAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2IntAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2IntAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}