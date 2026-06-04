import type { CharAVLTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/CharAVLTreeSet$Entry.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharAVLTreeSet$SetIterator extends Object implements CharListIterator {
    constructor(null_: CharAVLTreeSet$SetIterator)
    constructor(null_: CharAVLTreeSet$SetIterator, arg1: string)
    // private curr: CharAVLTreeSet$Entry;
    // private index: number;
    // private next: CharAVLTreeSet$Entry;
    // private prev: CharAVLTreeSet$Entry;
    add(arg0: string): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): string;
    nextChar(): string;
    nextEntry(): CharAVLTreeSet$Entry;
    nextIndex(): number;
    previous(): string;
    previousChar(): string;
    previousEntry(): CharAVLTreeSet$Entry;
    previousIndex(): number;
    remove(): void;
    set(arg0: string): void;
    updateNext(): void;
    updatePrevious(): void;
}