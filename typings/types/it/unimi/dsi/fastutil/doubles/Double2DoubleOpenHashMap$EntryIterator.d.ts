import type { Double2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleMap$Entry.d.ts'
import type { Double2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleOpenHashMap$MapEntry.d.ts'
import type { Double2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2DoubleOpenHashMap$EntryIterator extends Double2DoubleOpenHashMap$MapIterator<(param0: Double2DoubleMap$Entry) => void> implements ObjectIterator<Double2DoubleMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2DoubleOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2DoubleMap$Entry) => void, arg1: number): void;
    next(): Double2DoubleOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}