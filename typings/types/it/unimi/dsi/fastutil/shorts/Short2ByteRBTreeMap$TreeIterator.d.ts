import type { Short2ByteRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ByteRBTreeMap$TreeIterator extends Object {
    constructor(null_: Short2ByteRBTreeMap$TreeIterator)
    constructor(null_: Short2ByteRBTreeMap$TreeIterator, arg1: number)
    // private curr: Short2ByteRBTreeMap$Entry;
    // private index: number;
    // private next: Short2ByteRBTreeMap$Entry;
    // private prev: Short2ByteRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2ByteRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2ByteRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}