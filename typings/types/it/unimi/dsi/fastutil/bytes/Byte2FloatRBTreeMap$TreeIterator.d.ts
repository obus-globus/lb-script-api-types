import type { Byte2FloatRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2FloatRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Byte2FloatRBTreeMap$Entry;
    // private index: number;
    // private next: Byte2FloatRBTreeMap$Entry;
    // private prev: Byte2FloatRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2FloatRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2FloatRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}