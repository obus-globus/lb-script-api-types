import type { Char2IntRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntRBTreeMap$TreeIterator extends Object {
    constructor(null_: Char2IntRBTreeMap$TreeIterator)
    constructor(null_: Char2IntRBTreeMap$TreeIterator, arg1: string)
    // private curr: Char2IntRBTreeMap$Entry;
    // private index: number;
    // private next: Char2IntRBTreeMap$Entry;
    // private prev: Char2IntRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2IntRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2IntRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}