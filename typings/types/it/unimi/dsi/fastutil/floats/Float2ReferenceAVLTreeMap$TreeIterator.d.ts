import type { Float2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Float2ReferenceAVLTreeMap$TreeIterator)
    constructor(null_: Float2ReferenceAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Float2ReferenceAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Float2ReferenceAVLTreeMap$Entry<V>;
    // private prev: Float2ReferenceAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends Object | number | string | boolean>(): Float2ReferenceAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends Object | number | string | boolean>(): Float2ReferenceAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}