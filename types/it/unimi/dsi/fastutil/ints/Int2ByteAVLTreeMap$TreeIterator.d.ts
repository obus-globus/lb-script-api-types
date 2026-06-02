import type { Int2ByteAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ByteAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Int2ByteAVLTreeMap$TreeIterator)
    constructor(null_: Int2ByteAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Int2ByteAVLTreeMap$Entry;
    // private index: number;
    // private next: Int2ByteAVLTreeMap$Entry;
    // private prev: Int2ByteAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2ByteAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2ByteAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}