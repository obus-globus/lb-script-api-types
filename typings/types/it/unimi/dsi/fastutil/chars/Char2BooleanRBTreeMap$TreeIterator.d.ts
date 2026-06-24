import type { Char2BooleanRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private curr: Char2BooleanRBTreeMap$Entry;
    // private index: number;
    // private next: Char2BooleanRBTreeMap$Entry;
    // private prev: Char2BooleanRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2BooleanRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2BooleanRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}