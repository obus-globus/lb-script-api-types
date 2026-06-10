import type { Object2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Object2ReferenceAVLTreeMap$TreeIterator)
    constructor(null_: Object2ReferenceAVLTreeMap$TreeIterator)
    // private curr: Object2ReferenceAVLTreeMap$Entry<K, V>;
    // private index: number;
    // private next: Object2ReferenceAVLTreeMap$Entry<K, V>;
    // private prev: Object2ReferenceAVLTreeMap$Entry<K, V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Object2ReferenceAVLTreeMap$Entry<K, V>;
    nextIndex(): number;
    previousEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Object2ReferenceAVLTreeMap$Entry<K, V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}