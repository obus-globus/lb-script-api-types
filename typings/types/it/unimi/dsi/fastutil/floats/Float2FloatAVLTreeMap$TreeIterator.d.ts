import type { Float2FloatAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2FloatAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Float2FloatAVLTreeMap$TreeIterator)
    constructor(null_: Float2FloatAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Float2FloatAVLTreeMap$Entry;
    // private index: number;
    // private next: Float2FloatAVLTreeMap$Entry;
    // private prev: Float2FloatAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2FloatAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2FloatAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}