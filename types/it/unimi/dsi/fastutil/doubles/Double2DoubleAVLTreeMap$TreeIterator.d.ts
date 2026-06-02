import type { Double2DoubleAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2DoubleAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Double2DoubleAVLTreeMap$TreeIterator)
    constructor(null_: Double2DoubleAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Double2DoubleAVLTreeMap$Entry;
    // private index: number;
    // private next: Double2DoubleAVLTreeMap$Entry;
    // private prev: Double2DoubleAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2DoubleAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2DoubleAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}