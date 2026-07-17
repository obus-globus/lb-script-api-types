import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2LongRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2LongRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Int2LongRBTreeMap$Entry;
    // private index: number;
    // private next: Int2LongRBTreeMap$Entry;
    // private prev: Int2LongRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2LongRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2LongRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}