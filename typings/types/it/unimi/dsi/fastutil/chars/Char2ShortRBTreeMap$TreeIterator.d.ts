import type { Char2ShortRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ShortRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private curr: Char2ShortRBTreeMap$Entry;
    // private index: number;
    // private next: Char2ShortRBTreeMap$Entry;
    // private prev: Char2ShortRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2ShortRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2ShortRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}