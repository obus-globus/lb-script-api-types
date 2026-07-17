import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2BooleanRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2BooleanRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Float2BooleanRBTreeMap$Entry;
    // private index: number;
    // private next: Float2BooleanRBTreeMap$Entry;
    // private prev: Float2BooleanRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2BooleanRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2BooleanRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}