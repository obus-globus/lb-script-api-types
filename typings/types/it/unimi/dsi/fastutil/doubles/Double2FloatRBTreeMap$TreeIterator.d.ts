import type { Double2FloatRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2FloatRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Double2FloatRBTreeMap$Entry;
    // private index: number;
    // private next: Double2FloatRBTreeMap$Entry;
    // private prev: Double2FloatRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2FloatRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2FloatRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}