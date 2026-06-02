import type { Float2FloatRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2FloatRBTreeMap$TreeIterator extends Object {
    constructor(null_: Float2FloatRBTreeMap$TreeIterator)
    constructor(null_: Float2FloatRBTreeMap$TreeIterator, arg1: number)
    // private curr: Float2FloatRBTreeMap$Entry;
    // private index: number;
    // private next: Float2FloatRBTreeMap$Entry;
    // private prev: Float2FloatRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2FloatRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2FloatRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}