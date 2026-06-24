import type { Int2ShortRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ShortRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Int2ShortRBTreeMap$Entry;
    // private index: number;
    // private next: Int2ShortRBTreeMap$Entry;
    // private prev: Int2ShortRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2ShortRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2ShortRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}