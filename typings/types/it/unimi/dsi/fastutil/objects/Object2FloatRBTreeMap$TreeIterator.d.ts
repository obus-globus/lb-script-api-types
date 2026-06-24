import type { Object2FloatRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    // private curr: Object2FloatRBTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2FloatRBTreeMap$Entry<K>;
    // private prev: Object2FloatRBTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown>(): Object2FloatRBTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends unknown>(): Object2FloatRBTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}