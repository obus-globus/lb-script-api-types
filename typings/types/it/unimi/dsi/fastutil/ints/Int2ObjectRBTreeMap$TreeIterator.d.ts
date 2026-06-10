import type { Int2ObjectRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectRBTreeMap$TreeIterator extends Object {
    constructor(null_: Int2ObjectRBTreeMap$TreeIterator)
    constructor(null_: Int2ObjectRBTreeMap$TreeIterator, arg1: number)
    // private curr: Int2ObjectRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Int2ObjectRBTreeMap$Entry<V>;
    // private prev: Int2ObjectRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends Object | number | string | boolean>(): Int2ObjectRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends Object | number | string | boolean>(): Int2ObjectRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}