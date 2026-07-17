import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { Long2LongOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongOpenCustomHashMap$MapEntry.d.ts'
import type { Long2LongOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2LongOpenCustomHashMap$EntryIterator extends Long2LongOpenCustomHashMap$MapIterator<(param0: Long2LongMap$Entry) => void> implements ObjectIterator<Long2LongMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Long2LongOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2LongMap$Entry) => void, arg1: number): void;
    next(): Long2LongOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}