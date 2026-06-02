import type { Double2IntAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2IntAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Double2IntAVLTreeMap$TreeIterator)
    constructor(null_: Double2IntAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Double2IntAVLTreeMap$Entry;
    // private index: number;
    // private next: Double2IntAVLTreeMap$Entry;
    // private prev: Double2IntAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2IntAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2IntAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}