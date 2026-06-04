import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { FloatRBTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/FloatRBTreeSet$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatRBTreeSet$SetIterator extends Object implements FloatListIterator {
    constructor(null_: FloatRBTreeSet$SetIterator)
    constructor(null_: FloatRBTreeSet$SetIterator, arg1: number)
    // private curr: FloatRBTreeSet$Entry;
    // private index: number;
    // private next: FloatRBTreeSet$Entry;
    // private prev: FloatRBTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextEntry(): FloatRBTreeSet$Entry;
    nextFloat(): number;
    nextIndex(): number;
    previous(): number;
    previousEntry(): FloatRBTreeSet$Entry;
    previousFloat(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}