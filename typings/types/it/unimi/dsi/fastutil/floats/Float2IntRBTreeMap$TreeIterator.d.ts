import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2IntRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2IntRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Float2IntRBTreeMap$Entry;
    // private index: number;
    // private next: Float2IntRBTreeMap$Entry;
    // private prev: Float2IntRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2IntRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2IntRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}