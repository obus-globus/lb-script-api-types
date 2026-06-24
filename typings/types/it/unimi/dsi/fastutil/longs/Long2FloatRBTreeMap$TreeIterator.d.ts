import type { Long2FloatRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2FloatRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Long2FloatRBTreeMap$Entry;
    // private index: number;
    // private next: Long2FloatRBTreeMap$Entry;
    // private prev: Long2FloatRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2FloatRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2FloatRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}