import type { Char2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private curr: Char2ReferenceAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Char2ReferenceAVLTreeMap$Entry<V>;
    // private prev: Char2ReferenceAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Char2ReferenceAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Char2ReferenceAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}