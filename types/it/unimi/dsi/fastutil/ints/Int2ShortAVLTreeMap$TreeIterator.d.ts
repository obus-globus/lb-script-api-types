import type { Int2ShortAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ShortAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Int2ShortAVLTreeMap$TreeIterator)
    constructor(null_: Int2ShortAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Int2ShortAVLTreeMap$Entry;
    // private index: number;
    // private next: Int2ShortAVLTreeMap$Entry;
    // private prev: Int2ShortAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2ShortAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2ShortAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}