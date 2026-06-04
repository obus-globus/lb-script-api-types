import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { DoubleRBTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleRBTreeSet$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleRBTreeSet$SetIterator extends Object implements DoubleListIterator {
    constructor(null_: DoubleRBTreeSet$SetIterator)
    constructor(null_: DoubleRBTreeSet$SetIterator, arg1: number)
    // private curr: DoubleRBTreeSet$Entry;
    // private index: number;
    // private next: DoubleRBTreeSet$Entry;
    // private prev: DoubleRBTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextDouble(): number;
    nextEntry(): DoubleRBTreeSet$Entry;
    nextIndex(): number;
    previous(): number;
    previousDouble(): number;
    previousEntry(): DoubleRBTreeSet$Entry;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}