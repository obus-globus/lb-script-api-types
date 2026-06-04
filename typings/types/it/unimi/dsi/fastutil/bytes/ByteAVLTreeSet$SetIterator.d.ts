import type { ByteAVLTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteAVLTreeSet$Entry.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteAVLTreeSet$SetIterator extends Object implements ByteListIterator {
    constructor(null_: ByteAVLTreeSet$SetIterator)
    constructor(null_: ByteAVLTreeSet$SetIterator, arg1: number)
    // private curr: ByteAVLTreeSet$Entry;
    // private index: number;
    // private next: ByteAVLTreeSet$Entry;
    // private prev: ByteAVLTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextByte(): number;
    nextEntry(): ByteAVLTreeSet$Entry;
    nextIndex(): number;
    previous(): number;
    previousByte(): number;
    previousEntry(): ByteAVLTreeSet$Entry;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}