import type { Double2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Double2ReferenceAVLTreeMap$TreeIterator)
    constructor(null_: Double2ReferenceAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Double2ReferenceAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Double2ReferenceAVLTreeMap$Entry<V>;
    // private prev: Double2ReferenceAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends Object | number | string | boolean>(): Double2ReferenceAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends Object | number | string | boolean>(): Double2ReferenceAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}