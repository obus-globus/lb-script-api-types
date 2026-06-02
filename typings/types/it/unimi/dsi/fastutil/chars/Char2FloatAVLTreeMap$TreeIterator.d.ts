import type { Char2FloatAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2FloatAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Char2FloatAVLTreeMap$TreeIterator)
    constructor(null_: Char2FloatAVLTreeMap$TreeIterator, arg1: string)
    // private curr: Char2FloatAVLTreeMap$Entry;
    // private index: number;
    // private next: Char2FloatAVLTreeMap$Entry;
    // private prev: Char2FloatAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2FloatAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2FloatAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}