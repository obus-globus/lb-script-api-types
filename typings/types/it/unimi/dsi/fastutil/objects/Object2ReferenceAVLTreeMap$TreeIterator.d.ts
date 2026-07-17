import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<Object, Object>)
    constructor(null_: JavaMap<Object, Object>, arg1: Object)
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