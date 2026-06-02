import type { Double2ByteRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ByteRBTreeMap$TreeIterator extends Object {
    constructor(null_: Double2ByteRBTreeMap$TreeIterator)
    constructor(null_: Double2ByteRBTreeMap$TreeIterator, arg1: number)
    // private curr: Double2ByteRBTreeMap$Entry;
    // private index: number;
    // private next: Double2ByteRBTreeMap$Entry;
    // private prev: Double2ByteRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2ByteRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2ByteRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}