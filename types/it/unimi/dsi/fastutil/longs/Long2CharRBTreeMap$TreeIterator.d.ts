import type { Long2CharRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2CharRBTreeMap$TreeIterator extends Object {
    constructor(null_: Long2CharRBTreeMap$TreeIterator)
    constructor(null_: Long2CharRBTreeMap$TreeIterator, arg1: number)
    // private curr: Long2CharRBTreeMap$Entry;
    // private index: number;
    // private next: Long2CharRBTreeMap$Entry;
    // private prev: Long2CharRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2CharRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2CharRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}