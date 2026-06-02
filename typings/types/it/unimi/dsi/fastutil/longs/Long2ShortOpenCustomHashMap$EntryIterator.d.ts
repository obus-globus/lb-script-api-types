import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { Long2ShortOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortOpenCustomHashMap$MapEntry.d.ts'
import type { Long2ShortOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2ShortOpenCustomHashMap$EntryIterator extends Long2ShortOpenCustomHashMap$MapIterator<(param0: Long2ShortMap$Entry) => void> implements ObjectIterator<Long2ShortMap$Entry> {
    private constructor(null_: Long2ShortOpenCustomHashMap$EntryIterator)
    // private entry: Long2ShortOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2ShortMap$Entry) => void, arg1: number): void;
    next(): Long2ShortOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}