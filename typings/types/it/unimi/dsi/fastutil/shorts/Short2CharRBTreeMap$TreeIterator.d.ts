import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2CharRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Short2CharRBTreeMap$Entry;
    // private index: number;
    // private next: Short2CharRBTreeMap$Entry;
    // private prev: Short2CharRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2CharRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2CharRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}