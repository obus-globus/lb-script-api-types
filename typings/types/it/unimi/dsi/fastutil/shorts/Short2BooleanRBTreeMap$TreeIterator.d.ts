import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2BooleanRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Short2BooleanRBTreeMap$Entry;
    // private index: number;
    // private next: Short2BooleanRBTreeMap$Entry;
    // private prev: Short2BooleanRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2BooleanRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2BooleanRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}