import type { Object2LongAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Object2LongAVLTreeMap$TreeIterator)
    constructor(null_: Object2LongAVLTreeMap$TreeIterator)
    // private curr: Object2LongAVLTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2LongAVLTreeMap$Entry<K>;
    // private prev: Object2LongAVLTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Object2LongAVLTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry(): Object2LongAVLTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}