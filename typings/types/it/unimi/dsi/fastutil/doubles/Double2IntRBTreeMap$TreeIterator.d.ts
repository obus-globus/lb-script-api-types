import type { Double2IntRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2IntRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Double2IntRBTreeMap$Entry;
    // private index: number;
    // private next: Double2IntRBTreeMap$Entry;
    // private prev: Double2IntRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2IntRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2IntRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}