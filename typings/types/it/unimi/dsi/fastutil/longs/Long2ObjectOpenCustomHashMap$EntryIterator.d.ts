import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { Long2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Long2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2ObjectOpenCustomHashMap$EntryIterator extends Long2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Long2ObjectMap$Entry<V>> {
    private constructor(null_: Long2ObjectOpenCustomHashMap$EntryIterator)
    // private entry: Long2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2ObjectMap$Entry<V>) => void, arg1: number): void;
    next(): Long2ObjectOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}