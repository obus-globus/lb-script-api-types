import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Double2ObjectLinkedOpenHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    constructor(null_: JavaMap<any, any>)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add<V extends unknown>(arg0: Double2ObjectMap$Entry<V>): void;
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
    set<V extends unknown>(arg0: Double2ObjectMap$Entry<V>): void;
    skip(arg0: number): number;
}