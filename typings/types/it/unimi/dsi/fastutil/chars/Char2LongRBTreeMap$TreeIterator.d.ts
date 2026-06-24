import type { Char2LongRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2LongRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private curr: Char2LongRBTreeMap$Entry;
    // private index: number;
    // private next: Char2LongRBTreeMap$Entry;
    // private prev: Char2LongRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2LongRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2LongRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}