import type { Long2ObjectAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Long2ObjectAVLTreeMap$TreeIterator)
    constructor(null_: Long2ObjectAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Long2ObjectAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Long2ObjectAVLTreeMap$Entry<V>;
    // private prev: Long2ObjectAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2ObjectAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry(): Long2ObjectAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}