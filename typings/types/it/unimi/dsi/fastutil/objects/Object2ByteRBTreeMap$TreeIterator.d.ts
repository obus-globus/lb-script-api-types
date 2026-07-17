import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ByteRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    // private curr: Object2ByteRBTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2ByteRBTreeMap$Entry<K>;
    // private prev: Object2ByteRBTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown>(): Object2ByteRBTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends unknown>(): Object2ByteRBTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}