import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Long2ByteLinkedOpenHashMap$MapIterator<ConsumerType extends Object | number | string | boolean> extends Object {
    constructor(null_: Long2ByteLinkedOpenHashMap$MapIterator<ConsumerType>)
    private constructor(null_: Long2ByteLinkedOpenHashMap$MapIterator<ConsumerType>, arg1: number)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add(arg0: Long2ByteMap$Entry): void;
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
    set(arg0: Long2ByteMap$Entry): void;
    skip(arg0: number): number;
}