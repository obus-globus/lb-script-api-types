import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { Long2CharOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharOpenHashMap$MapEntry.d.ts'
import type { Long2CharOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2CharOpenHashMap$EntryIterator extends Long2CharOpenHashMap$MapIterator<(param0: Long2CharMap$Entry) => void> implements ObjectIterator<Long2CharMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Long2CharOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2CharMap$Entry) => void, arg1: number): void;
    next(): Long2CharOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}