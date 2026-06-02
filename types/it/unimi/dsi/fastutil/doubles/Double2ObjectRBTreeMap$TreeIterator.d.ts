import type { Double2ObjectRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectRBTreeMap$TreeIterator extends Object {
    constructor(null_: Double2ObjectRBTreeMap$TreeIterator)
    constructor(null_: Double2ObjectRBTreeMap$TreeIterator, arg1: number)
    // private curr: Double2ObjectRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Double2ObjectRBTreeMap$Entry<V>;
    // private prev: Double2ObjectRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2ObjectRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry(): Double2ObjectRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}