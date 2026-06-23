import type { Short2ReferenceRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceRBTreeMap$TreeIterator extends Object {
    constructor(null_: Short2ReferenceRBTreeMap$TreeIterator)
    constructor(null_: Short2ReferenceRBTreeMap$TreeIterator, arg1: number)
    // private curr: Short2ReferenceRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Short2ReferenceRBTreeMap$Entry<V>;
    // private prev: Short2ReferenceRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Short2ReferenceRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Short2ReferenceRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}