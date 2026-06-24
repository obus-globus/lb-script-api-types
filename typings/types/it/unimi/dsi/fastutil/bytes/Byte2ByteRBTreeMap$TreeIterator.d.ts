import type { Byte2ByteRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ByteRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Byte2ByteRBTreeMap$Entry;
    // private index: number;
    // private next: Byte2ByteRBTreeMap$Entry;
    // private prev: Byte2ByteRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2ByteRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2ByteRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}