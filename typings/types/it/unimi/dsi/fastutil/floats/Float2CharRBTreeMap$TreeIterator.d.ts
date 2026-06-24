import type { Float2CharRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2CharRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Float2CharRBTreeMap$Entry;
    // private index: number;
    // private next: Float2CharRBTreeMap$Entry;
    // private prev: Float2CharRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2CharRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2CharRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}