import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Reference2ObjectLinkedOpenHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    constructor(null_: JavaMap<Object, Object>)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add<K extends unknown, V extends unknown>(arg0: Reference2ObjectMap$Entry<K, V>): void;
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
    set<K extends unknown, V extends unknown>(arg0: Reference2ObjectMap$Entry<K, V>): void;
    skip(arg0: number): number;
}