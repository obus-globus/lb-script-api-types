import type { Int2ByteRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ByteRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Int2ByteRBTreeMap$Entry;
    // private index: number;
    // private next: Int2ByteRBTreeMap$Entry;
    // private prev: Int2ByteRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2ByteRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2ByteRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}