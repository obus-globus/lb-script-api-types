import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2DoubleRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2DoubleRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Float2DoubleRBTreeMap$Entry;
    // private index: number;
    // private next: Float2DoubleRBTreeMap$Entry;
    // private prev: Float2DoubleRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2DoubleRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2DoubleRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}