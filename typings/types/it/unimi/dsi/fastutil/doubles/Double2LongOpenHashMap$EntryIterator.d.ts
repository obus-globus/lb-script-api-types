import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { Double2LongOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongOpenHashMap$MapEntry.d.ts'
import type { Double2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2LongOpenHashMap$EntryIterator extends Double2LongOpenHashMap$MapIterator<(param0: Double2LongMap$Entry) => void> implements ObjectIterator<Double2LongMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Double2LongOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2LongMap$Entry) => void, arg1: number): void;
    next(): Double2LongOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}