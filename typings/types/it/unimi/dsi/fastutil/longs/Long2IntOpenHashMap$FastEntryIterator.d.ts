import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { Long2IntOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntOpenHashMap$MapEntry.d.ts'
import type { Long2IntOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2IntOpenHashMap$FastEntryIterator extends Long2IntOpenHashMap$MapIterator<(param0: Long2IntMap$Entry) => void> implements ObjectIterator<Long2IntMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Long2IntOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2IntMap$Entry) => void, arg1: number): void;
    next(): Long2IntOpenHashMap$MapEntry;
    skip(arg0: number): number;
}