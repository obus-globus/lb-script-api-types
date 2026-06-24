import type { Long2IntAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2IntAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Long2IntAVLTreeMap$Entry;
    // private index: number;
    // private next: Long2IntAVLTreeMap$Entry;
    // private prev: Long2IntAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2IntAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2IntAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}