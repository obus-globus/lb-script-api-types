import type { Object2DoubleAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: Object)
    // private curr: Object2DoubleAVLTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2DoubleAVLTreeMap$Entry<K>;
    // private prev: Object2DoubleAVLTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown>(): Object2DoubleAVLTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends unknown>(): Object2DoubleAVLTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}