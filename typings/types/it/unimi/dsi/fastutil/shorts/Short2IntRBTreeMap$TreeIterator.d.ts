import type { Short2IntRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2IntRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Short2IntRBTreeMap$Entry;
    // private index: number;
    // private next: Short2IntRBTreeMap$Entry;
    // private prev: Short2IntRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2IntRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2IntRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}