import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2ShortRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ShortRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Float2ShortRBTreeMap$Entry;
    // private index: number;
    // private next: Float2ShortRBTreeMap$Entry;
    // private prev: Float2ShortRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2ShortRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2ShortRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}