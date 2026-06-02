import type { Double2DoubleRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2DoubleRBTreeMap$TreeIterator extends Object {
    constructor(null_: Double2DoubleRBTreeMap$TreeIterator)
    constructor(null_: Double2DoubleRBTreeMap$TreeIterator, arg1: number)
    // private curr: Double2DoubleRBTreeMap$Entry;
    // private index: number;
    // private next: Double2DoubleRBTreeMap$Entry;
    // private prev: Double2DoubleRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2DoubleRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2DoubleRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}