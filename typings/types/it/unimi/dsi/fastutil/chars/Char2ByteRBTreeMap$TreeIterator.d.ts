import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2ByteRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    // private curr: Char2ByteRBTreeMap$Entry;
    // private index: number;
    // private next: Char2ByteRBTreeMap$Entry;
    // private prev: Char2ByteRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2ByteRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2ByteRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}