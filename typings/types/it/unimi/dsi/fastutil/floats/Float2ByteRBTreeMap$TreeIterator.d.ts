import type { Float2ByteRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ByteRBTreeMap$TreeIterator extends Object {
    constructor(null_: Float2ByteRBTreeMap$TreeIterator)
    constructor(null_: Float2ByteRBTreeMap$TreeIterator, arg1: number)
    // private curr: Float2ByteRBTreeMap$Entry;
    // private index: number;
    // private next: Float2ByteRBTreeMap$Entry;
    // private prev: Float2ByteRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2ByteRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2ByteRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}