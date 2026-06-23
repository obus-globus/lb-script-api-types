import type { Int2ReferenceRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceRBTreeMap$TreeIterator extends Object {
    constructor(null_: Int2ReferenceRBTreeMap$TreeIterator)
    constructor(null_: Int2ReferenceRBTreeMap$TreeIterator, arg1: number)
    // private curr: Int2ReferenceRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Int2ReferenceRBTreeMap$Entry<V>;
    // private prev: Int2ReferenceRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Int2ReferenceRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Int2ReferenceRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}