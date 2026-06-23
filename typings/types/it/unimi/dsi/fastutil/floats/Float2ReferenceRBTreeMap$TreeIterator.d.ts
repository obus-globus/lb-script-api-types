import type { Float2ReferenceRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceRBTreeMap$TreeIterator extends Object {
    constructor(null_: Float2ReferenceRBTreeMap$TreeIterator)
    constructor(null_: Float2ReferenceRBTreeMap$TreeIterator, arg1: number)
    // private curr: Float2ReferenceRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Float2ReferenceRBTreeMap$Entry<V>;
    // private prev: Float2ReferenceRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Float2ReferenceRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Float2ReferenceRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}