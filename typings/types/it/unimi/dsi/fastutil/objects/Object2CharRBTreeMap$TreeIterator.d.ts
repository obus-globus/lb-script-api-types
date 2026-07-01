import type { Object2CharRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: Object)
    // private curr: Object2CharRBTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2CharRBTreeMap$Entry<K>;
    // private prev: Object2CharRBTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown>(): Object2CharRBTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends unknown>(): Object2CharRBTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}