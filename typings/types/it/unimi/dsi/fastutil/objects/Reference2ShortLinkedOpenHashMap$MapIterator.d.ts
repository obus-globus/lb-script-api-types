import type { Reference2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Reference2ShortLinkedOpenHashMap$MapIterator<ConsumerType extends Object | number | string | boolean> extends Object {
    private constructor(null_: Reference2ShortLinkedOpenHashMap$MapIterator<Object>)
    constructor(null_: Reference2ShortLinkedOpenHashMap$MapIterator<Object>)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add(arg0: Reference2ShortMap$Entry<K>): void;
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
    set(arg0: Reference2ShortMap$Entry<K>): void;
    skip(arg0: number): number;
}