import type { Char2ObjectAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Char2ObjectAVLTreeMap$TreeIterator)
    constructor(null_: Char2ObjectAVLTreeMap$TreeIterator, arg1: string)
    // private curr: Char2ObjectAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Char2ObjectAVLTreeMap$Entry<V>;
    // private prev: Char2ObjectAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2ObjectAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry(): Char2ObjectAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}