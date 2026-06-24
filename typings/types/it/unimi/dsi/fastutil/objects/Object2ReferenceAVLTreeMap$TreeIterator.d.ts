import type { Object2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Map<K, V>)
    constructor(null_: Map<K, V>, arg1: K)
    // private curr: Object2ReferenceAVLTreeMap$Entry<K, V>;
    // private index: number;
    // private next: Object2ReferenceAVLTreeMap$Entry<K, V>;
    // private prev: Object2ReferenceAVLTreeMap$Entry<K, V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown, V extends unknown>(): Object2ReferenceAVLTreeMap$Entry<K, V>;
    nextIndex(): number;
    previousEntry<K extends unknown, V extends unknown>(): Object2ReferenceAVLTreeMap$Entry<K, V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}