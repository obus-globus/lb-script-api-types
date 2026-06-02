import type { Long2CharAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2CharAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Long2CharAVLTreeMap$TreeIterator)
    constructor(null_: Long2CharAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Long2CharAVLTreeMap$Entry;
    // private index: number;
    // private next: Long2CharAVLTreeMap$Entry;
    // private prev: Long2CharAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2CharAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2CharAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}