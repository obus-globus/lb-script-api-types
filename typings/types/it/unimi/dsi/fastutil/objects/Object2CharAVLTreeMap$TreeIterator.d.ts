import type { Object2CharAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Object2CharAVLTreeMap$TreeIterator)
    constructor(null_: Object2CharAVLTreeMap$TreeIterator)
    // private curr: Object2CharAVLTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2CharAVLTreeMap$Entry<K>;
    // private prev: Object2CharAVLTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends Object | number | string | boolean>(): Object2CharAVLTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends Object | number | string | boolean>(): Object2CharAVLTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}