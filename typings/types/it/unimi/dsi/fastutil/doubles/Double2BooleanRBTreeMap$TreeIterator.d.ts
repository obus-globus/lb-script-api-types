import type { Double2BooleanRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Double2BooleanRBTreeMap$Entry;
    // private index: number;
    // private next: Double2BooleanRBTreeMap$Entry;
    // private prev: Double2BooleanRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2BooleanRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2BooleanRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}