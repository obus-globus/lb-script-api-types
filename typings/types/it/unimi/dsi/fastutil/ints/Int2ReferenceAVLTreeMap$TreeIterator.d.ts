import type { Int2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Int2ReferenceAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Int2ReferenceAVLTreeMap$Entry<V>;
    // private prev: Int2ReferenceAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Int2ReferenceAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Int2ReferenceAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}