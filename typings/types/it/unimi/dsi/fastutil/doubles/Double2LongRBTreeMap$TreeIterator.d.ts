import type { Double2LongRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2LongRBTreeMap$TreeIterator extends Object {
    constructor(null_: Double2LongRBTreeMap$TreeIterator)
    constructor(null_: Double2LongRBTreeMap$TreeIterator, arg1: number)
    // private curr: Double2LongRBTreeMap$Entry;
    // private index: number;
    // private next: Double2LongRBTreeMap$Entry;
    // private prev: Double2LongRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2LongRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2LongRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}