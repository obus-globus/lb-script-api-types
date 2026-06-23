import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Float2ReferenceLinkedOpenHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    constructor(null_: Float2ReferenceLinkedOpenHashMap$MapIterator<Object>)
    private constructor(null_: Float2ReferenceLinkedOpenHashMap$MapIterator<Object>, arg1: number)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add<V extends unknown>(arg0: Float2ReferenceMap$Entry<V>): void;
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
    set<V extends unknown>(arg0: Float2ReferenceMap$Entry<V>): void;
    skip(arg0: number): number;
}