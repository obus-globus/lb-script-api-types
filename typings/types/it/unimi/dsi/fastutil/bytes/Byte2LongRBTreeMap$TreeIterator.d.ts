import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2LongRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2LongRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Byte2LongRBTreeMap$Entry;
    // private index: number;
    // private next: Byte2LongRBTreeMap$Entry;
    // private prev: Byte2LongRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2LongRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2LongRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}