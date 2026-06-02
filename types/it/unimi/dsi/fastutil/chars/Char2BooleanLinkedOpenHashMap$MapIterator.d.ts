import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Char2BooleanLinkedOpenHashMap$MapIterator<ConsumerType extends Object | number | string | boolean> extends Object {
    constructor(null_: Char2BooleanLinkedOpenHashMap$MapIterator<ConsumerType>)
    private constructor(null_: Char2BooleanLinkedOpenHashMap$MapIterator<ConsumerType>, arg1: string)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add(arg0: Char2BooleanMap$Entry): void;
    back(arg0: number): number;
    // private ensureIndexKnown(): void;
    forEachRemaining(arg0: ConsumerType): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): number;
    nextIndex(): number;
    previousEntry(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: Char2BooleanMap$Entry): void;
    skip(arg0: number): number;
}