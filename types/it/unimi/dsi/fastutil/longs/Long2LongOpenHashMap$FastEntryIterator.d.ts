import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { Long2LongOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongOpenHashMap$MapEntry.d.ts'
import type { Long2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2LongOpenHashMap$FastEntryIterator extends Long2LongOpenHashMap$MapIterator<(param0: Long2LongMap$Entry) => void> implements ObjectIterator<Long2LongMap$Entry> {
    private constructor(null_: Long2LongOpenHashMap$FastEntryIterator)
    // private entry: Long2LongOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2LongMap$Entry) => void, arg1: number): void;
    next(): Long2LongOpenHashMap$MapEntry;
    skip(arg0: number): number;
}