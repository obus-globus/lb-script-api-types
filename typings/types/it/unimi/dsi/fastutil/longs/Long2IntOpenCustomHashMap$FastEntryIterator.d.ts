import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { Long2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Long2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2IntOpenCustomHashMap$FastEntryIterator extends Long2IntOpenCustomHashMap$MapIterator<(param0: Long2IntMap$Entry) => void> implements ObjectIterator<Long2IntMap$Entry> {
    private constructor(null_: Long2IntOpenCustomHashMap$FastEntryIterator)
    // private entry: Long2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2IntMap$Entry) => void, arg1: number): void;
    next(): Long2IntOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}