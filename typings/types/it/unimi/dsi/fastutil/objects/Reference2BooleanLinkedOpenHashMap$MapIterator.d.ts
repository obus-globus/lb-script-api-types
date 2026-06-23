import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Reference2BooleanLinkedOpenHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    private constructor(null_: Reference2BooleanLinkedOpenHashMap$MapIterator<Object>)
    constructor(null_: Reference2BooleanLinkedOpenHashMap$MapIterator<Object>)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add<K extends unknown>(arg0: Reference2BooleanMap$Entry<K>): void;
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
    set<K extends unknown>(arg0: Reference2BooleanMap$Entry<K>): void;
    skip(arg0: number): number;
}