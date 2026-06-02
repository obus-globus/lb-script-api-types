import type { Float2DoubleAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2DoubleAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Float2DoubleAVLTreeMap$TreeIterator)
    constructor(null_: Float2DoubleAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Float2DoubleAVLTreeMap$Entry;
    // private index: number;
    // private next: Float2DoubleAVLTreeMap$Entry;
    // private prev: Float2DoubleAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2DoubleAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2DoubleAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}