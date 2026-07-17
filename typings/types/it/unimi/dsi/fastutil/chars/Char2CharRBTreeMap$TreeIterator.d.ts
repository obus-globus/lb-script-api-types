import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2CharRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    // private curr: Char2CharRBTreeMap$Entry;
    // private index: number;
    // private next: Char2CharRBTreeMap$Entry;
    // private prev: Char2CharRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2CharRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2CharRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}