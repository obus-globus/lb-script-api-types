import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { Double2LongOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongOpenCustomHashMap$MapEntry.d.ts'
import type { Double2LongOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2LongOpenCustomHashMap$EntryIterator extends Double2LongOpenCustomHashMap$MapIterator<(param0: Double2LongMap$Entry) => void> implements ObjectIterator<Double2LongMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2LongOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2LongMap$Entry) => void, arg1: number): void;
    next(): Double2LongOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}