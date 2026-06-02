import type { Short2CharAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Short2CharAVLTreeMap$TreeIterator)
    constructor(null_: Short2CharAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Short2CharAVLTreeMap$Entry;
    // private index: number;
    // private next: Short2CharAVLTreeMap$Entry;
    // private prev: Short2CharAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2CharAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2CharAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}