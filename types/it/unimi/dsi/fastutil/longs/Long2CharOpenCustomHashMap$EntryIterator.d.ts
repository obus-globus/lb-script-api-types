import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { Long2CharOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharOpenCustomHashMap$MapEntry.d.ts'
import type { Long2CharOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2CharOpenCustomHashMap$EntryIterator extends Long2CharOpenCustomHashMap$MapIterator<(param0: Long2CharMap$Entry) => void> implements ObjectIterator<Long2CharMap$Entry> {
    private constructor(null_: Long2CharOpenCustomHashMap$EntryIterator)
    // private entry: Long2CharOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2CharMap$Entry) => void, arg1: number): void;
    next(): Long2CharOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}