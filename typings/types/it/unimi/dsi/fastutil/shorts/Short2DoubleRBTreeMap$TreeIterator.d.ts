import type { Short2DoubleRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2DoubleRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Short2DoubleRBTreeMap$Entry;
    // private index: number;
    // private next: Short2DoubleRBTreeMap$Entry;
    // private prev: Short2DoubleRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2DoubleRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2DoubleRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}