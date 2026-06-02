import type { Byte2IntRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2IntRBTreeMap$TreeIterator extends Object {
    constructor(null_: Byte2IntRBTreeMap$TreeIterator)
    constructor(null_: Byte2IntRBTreeMap$TreeIterator, arg1: number)
    // private curr: Byte2IntRBTreeMap$Entry;
    // private index: number;
    // private next: Byte2IntRBTreeMap$Entry;
    // private prev: Byte2IntRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2IntRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2IntRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}