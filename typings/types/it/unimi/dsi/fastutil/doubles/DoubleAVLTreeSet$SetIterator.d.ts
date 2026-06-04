import type { DoubleAVLTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleAVLTreeSet$Entry.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleAVLTreeSet$SetIterator extends Object implements DoubleListIterator {
    constructor(null_: DoubleAVLTreeSet$SetIterator)
    constructor(null_: DoubleAVLTreeSet$SetIterator, arg1: number)
    // private curr: DoubleAVLTreeSet$Entry;
    // private index: number;
    // private next: DoubleAVLTreeSet$Entry;
    // private prev: DoubleAVLTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextDouble(): number;
    nextEntry(): DoubleAVLTreeSet$Entry;
    nextIndex(): number;
    previous(): number;
    previousDouble(): number;
    previousEntry(): DoubleAVLTreeSet$Entry;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}