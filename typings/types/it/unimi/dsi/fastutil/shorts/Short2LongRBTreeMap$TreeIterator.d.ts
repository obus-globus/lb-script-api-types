import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2LongRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2LongRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Short2LongRBTreeMap$Entry;
    // private index: number;
    // private next: Short2LongRBTreeMap$Entry;
    // private prev: Short2LongRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2LongRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2LongRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}