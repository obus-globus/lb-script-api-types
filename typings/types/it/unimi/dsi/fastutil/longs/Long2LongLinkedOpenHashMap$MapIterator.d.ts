import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Long2LongLinkedOpenHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number, arg2: (Object | null)[])
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add(arg0: Long2LongMap$Entry): void;
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
    set(arg0: Long2LongMap$Entry): void;
    skip(arg0: number): number;
}