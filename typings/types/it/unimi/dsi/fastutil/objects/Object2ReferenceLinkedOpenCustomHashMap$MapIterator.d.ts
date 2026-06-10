import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Object2ReferenceLinkedOpenCustomHashMap$MapIterator<ConsumerType extends Object | number | string | boolean> extends Object {
    private constructor(null_: Object2ReferenceLinkedOpenCustomHashMap$MapIterator<Object>)
    constructor(null_: Object2ReferenceLinkedOpenCustomHashMap$MapIterator<Object>)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: Object2ReferenceMap$Entry<K, V>): void;
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
    set<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: Object2ReferenceMap$Entry<K, V>): void;
    skip(arg0: number): number;
}