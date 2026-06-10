import type { Short2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Short2ReferenceAVLTreeMap$TreeIterator)
    constructor(null_: Short2ReferenceAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Short2ReferenceAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Short2ReferenceAVLTreeMap$Entry<V>;
    // private prev: Short2ReferenceAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends Object | number | string | boolean>(): Short2ReferenceAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends Object | number | string | boolean>(): Short2ReferenceAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}