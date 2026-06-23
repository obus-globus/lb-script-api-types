import type { Object2FloatAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Object2FloatAVLTreeMap$TreeIterator)
    constructor(null_: Object2FloatAVLTreeMap$TreeIterator)
    // private curr: Object2FloatAVLTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2FloatAVLTreeMap$Entry<K>;
    // private prev: Object2FloatAVLTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown>(): Object2FloatAVLTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends unknown>(): Object2FloatAVLTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}