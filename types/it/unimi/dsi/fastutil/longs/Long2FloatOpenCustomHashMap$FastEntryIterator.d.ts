import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { Long2FloatOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatOpenCustomHashMap$MapEntry.d.ts'
import type { Long2FloatOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2FloatOpenCustomHashMap$FastEntryIterator extends Long2FloatOpenCustomHashMap$MapIterator<(param0: Long2FloatMap$Entry) => void> implements ObjectIterator<Long2FloatMap$Entry> {
    private constructor(null_: Long2FloatOpenCustomHashMap$FastEntryIterator)
    // private entry: Long2FloatOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2FloatMap$Entry) => void, arg1: number): void;
    next(): Long2FloatOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}