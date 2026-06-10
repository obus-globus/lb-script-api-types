import type { Object2ReferenceRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceRBTreeMap$TreeIterator extends Object {
    constructor(null_: Object2ReferenceRBTreeMap$TreeIterator)
    constructor(null_: Object2ReferenceRBTreeMap$TreeIterator)
    // private curr: Object2ReferenceRBTreeMap$Entry<K, V>;
    // private index: number;
    // private next: Object2ReferenceRBTreeMap$Entry<K, V>;
    // private prev: Object2ReferenceRBTreeMap$Entry<K, V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Object2ReferenceRBTreeMap$Entry<K, V>;
    nextIndex(): number;
    previousEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Object2ReferenceRBTreeMap$Entry<K, V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}