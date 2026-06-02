import type { Double2ShortAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ShortAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Double2ShortAVLTreeMap$TreeIterator)
    constructor(null_: Double2ShortAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Double2ShortAVLTreeMap$Entry;
    // private index: number;
    // private next: Double2ShortAVLTreeMap$Entry;
    // private prev: Double2ShortAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2ShortAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2ShortAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}