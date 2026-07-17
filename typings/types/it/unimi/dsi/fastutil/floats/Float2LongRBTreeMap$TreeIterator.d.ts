import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2LongRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2LongRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Float2LongRBTreeMap$Entry;
    // private index: number;
    // private next: Float2LongRBTreeMap$Entry;
    // private prev: Float2LongRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2LongRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2LongRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}