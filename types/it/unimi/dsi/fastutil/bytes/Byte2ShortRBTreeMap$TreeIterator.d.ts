import type { Byte2ShortRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortRBTreeMap$TreeIterator extends Object {
    constructor(null_: Byte2ShortRBTreeMap$TreeIterator)
    constructor(null_: Byte2ShortRBTreeMap$TreeIterator, arg1: number)
    // private curr: Byte2ShortRBTreeMap$Entry;
    // private index: number;
    // private next: Byte2ShortRBTreeMap$Entry;
    // private prev: Byte2ShortRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2ShortRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2ShortRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}