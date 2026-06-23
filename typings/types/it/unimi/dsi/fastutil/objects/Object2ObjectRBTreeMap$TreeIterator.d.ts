import type { Object2ObjectRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectRBTreeMap$TreeIterator extends Object {
    constructor(null_: Object2ObjectRBTreeMap$TreeIterator)
    constructor(null_: Object2ObjectRBTreeMap$TreeIterator)
    // private curr: Object2ObjectRBTreeMap$Entry<K, V>;
    // private index: number;
    // private next: Object2ObjectRBTreeMap$Entry<K, V>;
    // private prev: Object2ObjectRBTreeMap$Entry<K, V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown, V extends unknown>(): Object2ObjectRBTreeMap$Entry<K, V>;
    nextIndex(): number;
    previousEntry<K extends unknown, V extends unknown>(): Object2ObjectRBTreeMap$Entry<K, V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}