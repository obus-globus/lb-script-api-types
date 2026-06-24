import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { ByteRBTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteRBTreeSet$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteRBTreeSet$SetIterator extends Object implements ByteListIterator {
    constructor(null_: (Object | null)[])
    constructor(null_: (Object | null)[], arg1: number)
    // private curr: ByteRBTreeSet$Entry;
    // private index: number;
    // private next: ByteRBTreeSet$Entry;
    // private prev: ByteRBTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextByte(): number;
    nextEntry(): ByteRBTreeSet$Entry;
    nextIndex(): number;
    previous(): number;
    previousByte(): number;
    previousEntry(): ByteRBTreeSet$Entry;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}