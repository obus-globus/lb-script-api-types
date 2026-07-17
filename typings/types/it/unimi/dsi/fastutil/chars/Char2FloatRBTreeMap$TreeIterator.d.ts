import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2FloatRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2FloatRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    // private curr: Char2FloatRBTreeMap$Entry;
    // private index: number;
    // private next: Char2FloatRBTreeMap$Entry;
    // private prev: Char2FloatRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2FloatRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2FloatRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}