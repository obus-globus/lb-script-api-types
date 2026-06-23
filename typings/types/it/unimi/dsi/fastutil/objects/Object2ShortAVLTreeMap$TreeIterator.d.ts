import type { Object2ShortAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Object2ShortAVLTreeMap$TreeIterator)
    constructor(null_: Object2ShortAVLTreeMap$TreeIterator)
    // private curr: Object2ShortAVLTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2ShortAVLTreeMap$Entry<K>;
    // private prev: Object2ShortAVLTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown>(): Object2ShortAVLTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends unknown>(): Object2ShortAVLTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}