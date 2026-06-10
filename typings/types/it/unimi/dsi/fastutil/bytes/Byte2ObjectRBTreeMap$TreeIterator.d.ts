import type { Byte2ObjectRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectRBTreeMap$TreeIterator extends Object {
    constructor(null_: Byte2ObjectRBTreeMap$TreeIterator)
    constructor(null_: Byte2ObjectRBTreeMap$TreeIterator, arg1: number)
    // private curr: Byte2ObjectRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Byte2ObjectRBTreeMap$Entry<V>;
    // private prev: Byte2ObjectRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends Object | number | string | boolean>(): Byte2ObjectRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends Object | number | string | boolean>(): Byte2ObjectRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}