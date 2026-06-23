import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Object2ShortLinkedOpenCustomHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    private constructor(null_: Object2ShortLinkedOpenCustomHashMap$MapIterator<Object>)
    constructor(null_: Object2ShortLinkedOpenCustomHashMap$MapIterator<Object>)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add<K extends unknown>(arg0: Object2ShortMap$Entry<K>): void;
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
    set<K extends unknown>(arg0: Object2ShortMap$Entry<K>): void;
    skip(arg0: number): number;
}