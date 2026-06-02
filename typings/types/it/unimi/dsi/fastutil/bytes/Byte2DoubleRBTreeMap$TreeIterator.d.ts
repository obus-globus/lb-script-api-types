import type { Byte2DoubleRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2DoubleRBTreeMap$TreeIterator extends Object {
    constructor(null_: Byte2DoubleRBTreeMap$TreeIterator)
    constructor(null_: Byte2DoubleRBTreeMap$TreeIterator, arg1: number)
    // private curr: Byte2DoubleRBTreeMap$Entry;
    // private index: number;
    // private next: Byte2DoubleRBTreeMap$Entry;
    // private prev: Byte2DoubleRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2DoubleRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2DoubleRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}