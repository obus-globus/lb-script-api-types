import type { Double2LongAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2LongAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Double2LongAVLTreeMap$TreeIterator)
    constructor(null_: Double2LongAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Double2LongAVLTreeMap$Entry;
    // private index: number;
    // private next: Double2LongAVLTreeMap$Entry;
    // private prev: Double2LongAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2LongAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2LongAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}