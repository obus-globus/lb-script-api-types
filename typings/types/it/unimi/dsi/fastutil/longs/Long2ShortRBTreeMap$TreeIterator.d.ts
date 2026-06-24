import type { Long2ShortRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ShortRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Long2ShortRBTreeMap$Entry;
    // private index: number;
    // private next: Long2ShortRBTreeMap$Entry;
    // private prev: Long2ShortRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2ShortRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2ShortRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}