import type { Object2ByteAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Object2ByteAVLTreeMap$TreeIterator)
    constructor(null_: Object2ByteAVLTreeMap$TreeIterator)
    // private curr: Object2ByteAVLTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2ByteAVLTreeMap$Entry<K>;
    // private prev: Object2ByteAVLTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Object2ByteAVLTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry(): Object2ByteAVLTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}