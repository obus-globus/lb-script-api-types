import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Double2CharLinkedOpenHashMap$MapIterator<ConsumerType extends Object | number | string | boolean> extends Object {
    constructor(null_: Double2CharLinkedOpenHashMap$MapIterator<ConsumerType>)
    private constructor(null_: Double2CharLinkedOpenHashMap$MapIterator<ConsumerType>, arg1: number)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add(arg0: Double2CharMap$Entry): void;
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
    set(arg0: Double2CharMap$Entry): void;
    skip(arg0: number): number;
}