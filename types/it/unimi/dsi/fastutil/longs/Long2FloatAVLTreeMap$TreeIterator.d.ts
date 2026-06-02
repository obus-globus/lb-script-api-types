import type { Long2FloatAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2FloatAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Long2FloatAVLTreeMap$TreeIterator)
    constructor(null_: Long2FloatAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Long2FloatAVLTreeMap$Entry;
    // private index: number;
    // private next: Long2FloatAVLTreeMap$Entry;
    // private prev: Long2FloatAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2FloatAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2FloatAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}