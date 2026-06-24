import type { Char2DoubleRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2DoubleRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private curr: Char2DoubleRBTreeMap$Entry;
    // private index: number;
    // private next: Char2DoubleRBTreeMap$Entry;
    // private prev: Char2DoubleRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2DoubleRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2DoubleRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}