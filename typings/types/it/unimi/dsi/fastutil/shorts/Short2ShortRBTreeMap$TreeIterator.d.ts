import type { Short2ShortRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ShortRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Short2ShortRBTreeMap$Entry;
    // private index: number;
    // private next: Short2ShortRBTreeMap$Entry;
    // private prev: Short2ShortRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2ShortRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2ShortRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}