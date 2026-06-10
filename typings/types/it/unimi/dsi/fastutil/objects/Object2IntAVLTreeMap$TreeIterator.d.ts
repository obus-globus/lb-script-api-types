import type { Object2IntAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Object2IntAVLTreeMap$TreeIterator)
    constructor(null_: Object2IntAVLTreeMap$TreeIterator)
    // private curr: Object2IntAVLTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2IntAVLTreeMap$Entry<K>;
    // private prev: Object2IntAVLTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends Object | number | string | boolean>(): Object2IntAVLTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends Object | number | string | boolean>(): Object2IntAVLTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}