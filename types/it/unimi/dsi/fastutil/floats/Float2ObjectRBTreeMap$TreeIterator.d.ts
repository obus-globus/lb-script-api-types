import type { Float2ObjectRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectRBTreeMap$TreeIterator extends Object {
    constructor(null_: Float2ObjectRBTreeMap$TreeIterator)
    constructor(null_: Float2ObjectRBTreeMap$TreeIterator, arg1: number)
    // private curr: Float2ObjectRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Float2ObjectRBTreeMap$Entry<V>;
    // private prev: Float2ObjectRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2ObjectRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry(): Float2ObjectRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}