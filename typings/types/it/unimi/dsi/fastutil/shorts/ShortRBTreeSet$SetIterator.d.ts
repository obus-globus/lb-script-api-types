import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { ShortRBTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortRBTreeSet$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortRBTreeSet$SetIterator extends Object implements ShortListIterator {
    constructor(null_: ShortRBTreeSet$SetIterator)
    constructor(null_: ShortRBTreeSet$SetIterator, arg1: number)
    // private curr: ShortRBTreeSet$Entry;
    // private index: number;
    // private next: ShortRBTreeSet$Entry;
    // private prev: ShortRBTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextEntry(): ShortRBTreeSet$Entry;
    nextIndex(): number;
    nextShort(): number;
    previous(): number;
    previousEntry(): ShortRBTreeSet$Entry;
    previousIndex(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}