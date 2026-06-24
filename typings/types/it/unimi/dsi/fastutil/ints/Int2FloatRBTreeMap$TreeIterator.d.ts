import type { Int2FloatRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2FloatRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Int2FloatRBTreeMap$Entry;
    // private index: number;
    // private next: Int2FloatRBTreeMap$Entry;
    // private prev: Int2FloatRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2FloatRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2FloatRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}