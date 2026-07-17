import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2ByteAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    // private curr: Char2ByteAVLTreeMap$Entry;
    // private index: number;
    // private next: Char2ByteAVLTreeMap$Entry;
    // private prev: Char2ByteAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2ByteAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2ByteAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}