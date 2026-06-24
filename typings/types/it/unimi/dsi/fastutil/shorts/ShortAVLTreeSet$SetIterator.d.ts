import type { ShortAVLTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortAVLTreeSet$Entry.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortAVLTreeSet$SetIterator extends Object implements ShortListIterator {
    constructor(null_: (Object | null)[])
    constructor(null_: (Object | null)[], arg1: number)
    // private curr: ShortAVLTreeSet$Entry;
    // private index: number;
    // private next: ShortAVLTreeSet$Entry;
    // private prev: ShortAVLTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextEntry(): ShortAVLTreeSet$Entry;
    nextIndex(): number;
    nextShort(): number;
    previous(): number;
    previousEntry(): ShortAVLTreeSet$Entry;
    previousIndex(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}