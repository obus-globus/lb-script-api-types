import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { IntRBTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/IntRBTreeSet$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntRBTreeSet$SetIterator extends Object implements IntListIterator {
    constructor(null_: IntRBTreeSet$SetIterator)
    constructor(null_: IntRBTreeSet$SetIterator, arg1: number)
    // private curr: IntRBTreeSet$Entry;
    // private index: number;
    // private next: IntRBTreeSet$Entry;
    // private prev: IntRBTreeSet$Entry;
    add(arg0: number): void;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextEntry(): IntRBTreeSet$Entry;
    nextIndex(): number;
    nextInt(): number;
    previous(): number;
    previousEntry(): IntRBTreeSet$Entry;
    previousIndex(): number;
    previousInt(): number;
    remove(): void;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}