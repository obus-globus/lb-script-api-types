import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { LongRBTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/LongRBTreeSet$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongRBTreeSet$SetIterator extends Object implements LongListIterator {
    constructor(null_: LongRBTreeSet$SetIterator)
    constructor(null_: LongRBTreeSet$SetIterator, arg1: number)
    // private curr: LongRBTreeSet$Entry;
    // private index: number;
    // private next: LongRBTreeSet$Entry;
    // private prev: LongRBTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextEntry(): LongRBTreeSet$Entry;
    nextIndex(): number;
    nextLong(): number;
    previous(): number;
    previousEntry(): LongRBTreeSet$Entry;
    previousIndex(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}