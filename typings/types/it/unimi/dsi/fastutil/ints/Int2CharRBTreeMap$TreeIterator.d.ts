import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2CharRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Int2CharRBTreeMap$Entry;
    // private index: number;
    // private next: Int2CharRBTreeMap$Entry;
    // private prev: Int2CharRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2CharRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2CharRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}