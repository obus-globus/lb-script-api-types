import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ObjectAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<Object, Object>)
    constructor(null_: JavaMap<Object, Object>, arg1: Object)
    // private curr: Object2ObjectAVLTreeMap$Entry<K, V>;
    // private index: number;
    // private next: Object2ObjectAVLTreeMap$Entry<K, V>;
    // private prev: Object2ObjectAVLTreeMap$Entry<K, V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown, V extends unknown>(): Object2ObjectAVLTreeMap$Entry<K, V>;
    nextIndex(): number;
    previousEntry<K extends unknown, V extends unknown>(): Object2ObjectAVLTreeMap$Entry<K, V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}