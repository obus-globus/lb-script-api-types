import type { Short2DoubleAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2DoubleAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Short2DoubleAVLTreeMap$TreeIterator)
    constructor(null_: Short2DoubleAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Short2DoubleAVLTreeMap$Entry;
    // private index: number;
    // private next: Short2DoubleAVLTreeMap$Entry;
    // private prev: Short2DoubleAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2DoubleAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2DoubleAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}