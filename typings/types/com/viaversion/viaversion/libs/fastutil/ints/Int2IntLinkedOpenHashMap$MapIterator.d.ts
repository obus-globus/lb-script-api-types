import type { Int2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Int2IntLinkedOpenHashMap$MapIterator<ConsumerType extends Object | number | string | boolean> extends Object {
    constructor(null_: Int2IntLinkedOpenHashMap$MapIterator<ConsumerType>)
    private constructor(null_: Int2IntLinkedOpenHashMap$MapIterator<ConsumerType>, arg1: number)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    add(arg0: Int2IntMap$Entry): void;
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
    set(arg0: Int2IntMap$Entry): void;
    skip(arg0: number): number;
}