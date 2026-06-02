import type { Float2CharAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2CharAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Float2CharAVLTreeMap$TreeIterator)
    constructor(null_: Float2CharAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Float2CharAVLTreeMap$Entry;
    // private index: number;
    // private next: Float2CharAVLTreeMap$Entry;
    // private prev: Float2CharAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2CharAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2CharAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}