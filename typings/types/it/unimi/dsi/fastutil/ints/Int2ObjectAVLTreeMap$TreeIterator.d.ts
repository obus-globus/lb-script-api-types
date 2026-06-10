import type { Int2ObjectAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Int2ObjectAVLTreeMap$TreeIterator)
    constructor(null_: Int2ObjectAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Int2ObjectAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Int2ObjectAVLTreeMap$Entry<V>;
    // private prev: Int2ObjectAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends Object | number | string | boolean>(): Int2ObjectAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends Object | number | string | boolean>(): Int2ObjectAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}