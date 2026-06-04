import type { IntAVLTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/IntAVLTreeSet$Entry.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntAVLTreeSet$SetIterator extends Object implements IntListIterator {
    constructor(null_: IntAVLTreeSet$SetIterator)
    constructor(null_: IntAVLTreeSet$SetIterator, arg1: number)
    // private curr: IntAVLTreeSet$Entry;
    // private index: number;
    // private next: IntAVLTreeSet$Entry;
    // private prev: IntAVLTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextEntry(): IntAVLTreeSet$Entry;
    nextIndex(): number;
    nextInt(): number;
    previous(): number;
    previousEntry(): IntAVLTreeSet$Entry;
    previousIndex(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}