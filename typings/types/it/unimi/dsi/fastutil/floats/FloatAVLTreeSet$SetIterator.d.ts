import type { FloatAVLTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/FloatAVLTreeSet$Entry.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatAVLTreeSet$SetIterator extends Object implements FloatListIterator {
    constructor(null_: FloatAVLTreeSet$SetIterator)
    constructor(null_: FloatAVLTreeSet$SetIterator, arg1: number)
    // private curr: FloatAVLTreeSet$Entry;
    // private index: number;
    // private next: FloatAVLTreeSet$Entry;
    // private prev: FloatAVLTreeSet$Entry;
    add(arg0: number): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextEntry(): FloatAVLTreeSet$Entry;
    nextFloat(): number;
    nextIndex(): number;
    previous(): number;
    previousEntry(): FloatAVLTreeSet$Entry;
    previousFloat(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    updateNext(): void;
    updatePrevious(): void;
}