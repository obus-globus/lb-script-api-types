import type { Long2ByteRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ByteRBTreeMap$TreeIterator extends Object {
    constructor(null_: Long2ByteRBTreeMap$TreeIterator)
    constructor(null_: Long2ByteRBTreeMap$TreeIterator, arg1: number)
    // private curr: Long2ByteRBTreeMap$Entry;
    // private index: number;
    // private next: Long2ByteRBTreeMap$Entry;
    // private prev: Long2ByteRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2ByteRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2ByteRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}