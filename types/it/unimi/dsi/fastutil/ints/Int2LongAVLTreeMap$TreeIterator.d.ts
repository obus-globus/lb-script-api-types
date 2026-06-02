import type { Int2LongAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2LongAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Int2LongAVLTreeMap$TreeIterator)
    constructor(null_: Int2LongAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Int2LongAVLTreeMap$Entry;
    // private index: number;
    // private next: Int2LongAVLTreeMap$Entry;
    // private prev: Int2LongAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2LongAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2LongAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}