import type { Long2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Long2ReferenceAVLTreeMap$TreeIterator)
    constructor(null_: Long2ReferenceAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Long2ReferenceAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Long2ReferenceAVLTreeMap$Entry<V>;
    // private prev: Long2ReferenceAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends Object | number | string | boolean>(): Long2ReferenceAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends Object | number | string | boolean>(): Long2ReferenceAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}