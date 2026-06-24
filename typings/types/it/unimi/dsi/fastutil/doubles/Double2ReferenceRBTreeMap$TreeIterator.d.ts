import type { Double2ReferenceRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Double2ReferenceRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Double2ReferenceRBTreeMap$Entry<V>;
    // private prev: Double2ReferenceRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Double2ReferenceRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Double2ReferenceRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}