import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2DoubleAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2DoubleAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    // private curr: Char2DoubleAVLTreeMap$Entry;
    // private index: number;
    // private next: Char2DoubleAVLTreeMap$Entry;
    // private prev: Char2DoubleAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2DoubleAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2DoubleAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}