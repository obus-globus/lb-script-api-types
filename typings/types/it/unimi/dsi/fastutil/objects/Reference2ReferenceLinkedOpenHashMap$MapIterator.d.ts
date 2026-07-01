import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Reference2ReferenceLinkedOpenHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: Object, arg2: (Object | null)[])
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add<K extends unknown, V extends unknown>(arg0: Reference2ReferenceMap$Entry<K, V>): void;
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
    set<K extends unknown, V extends unknown>(arg0: Reference2ReferenceMap$Entry<K, V>): void;
    skip(arg0: number): number;
}