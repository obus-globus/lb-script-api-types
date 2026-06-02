import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Object2IntLinkedOpenHashMap$MapIterator<ConsumerType extends Object | number | string | boolean> extends Object {
    private constructor(null_: Object2IntLinkedOpenHashMap$MapIterator<Object>)
    constructor(null_: Object2IntLinkedOpenHashMap$MapIterator<Object>)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add(arg0: Object2IntMap$Entry<K>): void;
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
    set(arg0: Object2IntMap$Entry<K>): void;
    skip(arg0: number): number;
}