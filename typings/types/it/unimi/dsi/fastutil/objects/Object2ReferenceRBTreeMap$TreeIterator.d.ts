import type { Object2ReferenceRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceRBTreeMap$TreeIterator extends Object {
    constructor(null_: Map<K, V>)
    constructor(null_: Map<K, V>, arg1: K)
    // private curr: Object2ReferenceRBTreeMap$Entry<K, V>;
    // private index: number;
    // private next: Object2ReferenceRBTreeMap$Entry<K, V>;
    // private prev: Object2ReferenceRBTreeMap$Entry<K, V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown, V extends unknown>(): Object2ReferenceRBTreeMap$Entry<K, V>;
    nextIndex(): number;
    previousEntry<K extends unknown, V extends unknown>(): Object2ReferenceRBTreeMap$Entry<K, V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}