import type { Double2ShortRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ShortRBTreeMap$TreeIterator extends Object {
    constructor(null_: Double2ShortRBTreeMap$TreeIterator)
    constructor(null_: Double2ShortRBTreeMap$TreeIterator, arg1: number)
    // private curr: Double2ShortRBTreeMap$Entry;
    // private index: number;
    // private next: Double2ShortRBTreeMap$Entry;
    // private prev: Double2ShortRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2ShortRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2ShortRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}