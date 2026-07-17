import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2FloatRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2FloatRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Short2FloatRBTreeMap$Entry;
    // private index: number;
    // private next: Short2FloatRBTreeMap$Entry;
    // private prev: Short2FloatRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2FloatRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2FloatRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}