import type { Int2IntRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Int2IntRBTreeMap$Entry;
    // private index: number;
    // private next: Int2IntRBTreeMap$Entry;
    // private prev: Int2IntRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2IntRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2IntRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}