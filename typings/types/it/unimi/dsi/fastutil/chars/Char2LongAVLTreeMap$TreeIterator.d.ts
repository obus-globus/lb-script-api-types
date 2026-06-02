import type { Char2LongAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2LongAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Char2LongAVLTreeMap$TreeIterator)
    constructor(null_: Char2LongAVLTreeMap$TreeIterator, arg1: string)
    // private curr: Char2LongAVLTreeMap$Entry;
    // private index: number;
    // private next: Char2LongAVLTreeMap$Entry;
    // private prev: Char2LongAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2LongAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2LongAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}