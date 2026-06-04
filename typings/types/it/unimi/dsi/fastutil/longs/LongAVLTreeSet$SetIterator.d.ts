import type { LongAVLTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/LongAVLTreeSet$Entry.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongAVLTreeSet$SetIterator extends Object implements LongListIterator {
    constructor(null_: LongAVLTreeSet$SetIterator)
    constructor(null_: LongAVLTreeSet$SetIterator, arg1: number)
    // private curr: LongAVLTreeSet$Entry;
    // private index: number;
    // private next: LongAVLTreeSet$Entry;
    // private prev: LongAVLTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextEntry(): LongAVLTreeSet$Entry;
    nextIndex(): number;
    nextLong(): number;
    previous(): number;
    previousEntry(): LongAVLTreeSet$Entry;
    previousIndex(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}