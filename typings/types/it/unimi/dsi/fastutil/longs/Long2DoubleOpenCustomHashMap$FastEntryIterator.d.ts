import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { Long2DoubleOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleOpenCustomHashMap$MapEntry.d.ts'
import type { Long2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleOpenCustomHashMap$FastEntryIterator extends Long2DoubleOpenCustomHashMap$MapIterator<(param0: Long2DoubleMap$Entry) => void> implements ObjectIterator<Long2DoubleMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Long2DoubleOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2DoubleMap$Entry) => void, arg1: number): void;
    next(): Long2DoubleOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}