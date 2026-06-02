import type { Long2DoubleAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Long2DoubleAVLTreeMap$TreeIterator)
    constructor(null_: Long2DoubleAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Long2DoubleAVLTreeMap$Entry;
    // private index: number;
    // private next: Long2DoubleAVLTreeMap$Entry;
    // private prev: Long2DoubleAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2DoubleAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2DoubleAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}