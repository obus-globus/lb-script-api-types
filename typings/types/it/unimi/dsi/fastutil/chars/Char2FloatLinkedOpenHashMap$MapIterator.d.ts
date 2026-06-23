import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Char2FloatLinkedOpenHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    constructor(null_: Char2FloatLinkedOpenHashMap$MapIterator<ConsumerType>)
    private constructor(null_: Char2FloatLinkedOpenHashMap$MapIterator<ConsumerType>, arg1: string)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add(arg0: Char2FloatMap$Entry): void;
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
    set(arg0: Char2FloatMap$Entry): void;
    skip(arg0: number): number;
}