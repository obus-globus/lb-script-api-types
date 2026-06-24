import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { CharRBTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/CharRBTreeSet$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharRBTreeSet$SetIterator extends Object implements CharListIterator {
    constructor(null_: (Object | null)[])
    constructor(null_: (Object | null)[], arg1: string)
    // private curr: CharRBTreeSet$Entry;
    // private index: number;
    // private next: CharRBTreeSet$Entry;
    // private prev: CharRBTreeSet$Entry;
    add(arg0: string): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): string;
    nextChar(): string;
    nextEntry(): CharRBTreeSet$Entry;
    nextIndex(): number;
    previous(): string;
    previousChar(): string;
    previousEntry(): CharRBTreeSet$Entry;
    previousIndex(): number;
    remove(): void;
    set(arg0: string): void;
    updateNext(): void;
    updatePrevious(): void;
}