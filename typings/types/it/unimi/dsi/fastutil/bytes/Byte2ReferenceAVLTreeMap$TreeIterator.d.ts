import type { Byte2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Byte2ReferenceAVLTreeMap$TreeIterator)
    constructor(null_: Byte2ReferenceAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Byte2ReferenceAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Byte2ReferenceAVLTreeMap$Entry<V>;
    // private prev: Byte2ReferenceAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends Object | number | string | boolean>(): Byte2ReferenceAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends Object | number | string | boolean>(): Byte2ReferenceAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}