import type { Byte2CharRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2CharRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Byte2CharRBTreeMap$Entry;
    // private index: number;
    // private next: Byte2CharRBTreeMap$Entry;
    // private prev: Byte2CharRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2CharRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2CharRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}