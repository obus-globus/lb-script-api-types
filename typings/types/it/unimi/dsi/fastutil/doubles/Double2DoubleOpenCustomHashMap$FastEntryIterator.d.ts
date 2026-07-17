import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleMap$Entry.d.ts'
import type { Double2DoubleOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleOpenCustomHashMap$MapEntry.d.ts'
import type { Double2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2DoubleOpenCustomHashMap$FastEntryIterator extends Double2DoubleOpenCustomHashMap$MapIterator<(param0: Double2DoubleMap$Entry) => void> implements ObjectIterator<Double2DoubleMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Double2DoubleOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2DoubleMap$Entry) => void, arg1: number): void;
    next(): Double2DoubleOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}