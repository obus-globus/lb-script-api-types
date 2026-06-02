import type { Long2LongAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2LongAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Long2LongAVLTreeMap$TreeIterator)
    constructor(null_: Long2LongAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Long2LongAVLTreeMap$Entry;
    // private index: number;
    // private next: Long2LongAVLTreeMap$Entry;
    // private prev: Long2LongAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2LongAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2LongAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}