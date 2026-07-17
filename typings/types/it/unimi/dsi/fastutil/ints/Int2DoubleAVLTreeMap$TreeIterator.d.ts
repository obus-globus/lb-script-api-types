import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2DoubleAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2DoubleAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Int2DoubleAVLTreeMap$Entry;
    // private index: number;
    // private next: Int2DoubleAVLTreeMap$Entry;
    // private prev: Int2DoubleAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2DoubleAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2DoubleAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}