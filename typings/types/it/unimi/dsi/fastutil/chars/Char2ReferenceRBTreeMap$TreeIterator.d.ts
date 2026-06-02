import type { Char2ReferenceRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceRBTreeMap$TreeIterator extends Object {
    constructor(null_: Char2ReferenceRBTreeMap$TreeIterator)
    constructor(null_: Char2ReferenceRBTreeMap$TreeIterator, arg1: string)
    // private curr: Char2ReferenceRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Char2ReferenceRBTreeMap$Entry<V>;
    // private prev: Char2ReferenceRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2ReferenceRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry(): Char2ReferenceRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}