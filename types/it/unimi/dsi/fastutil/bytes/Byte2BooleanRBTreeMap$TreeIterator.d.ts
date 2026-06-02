import type { Byte2BooleanRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2BooleanRBTreeMap$TreeIterator extends Object {
    constructor(null_: Byte2BooleanRBTreeMap$TreeIterator)
    constructor(null_: Byte2BooleanRBTreeMap$TreeIterator, arg1: number)
    // private curr: Byte2BooleanRBTreeMap$Entry;
    // private index: number;
    // private next: Byte2BooleanRBTreeMap$Entry;
    // private prev: Byte2BooleanRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2BooleanRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2BooleanRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}