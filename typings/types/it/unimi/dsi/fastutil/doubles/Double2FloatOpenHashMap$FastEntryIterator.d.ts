import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { Double2FloatOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatOpenHashMap$MapEntry.d.ts'
import type { Double2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2FloatOpenHashMap$FastEntryIterator extends Double2FloatOpenHashMap$MapIterator<(param0: Double2FloatMap$Entry) => void> implements ObjectIterator<Double2FloatMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Double2FloatOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2FloatMap$Entry) => void, arg1: number): void;
    next(): Double2FloatOpenHashMap$MapEntry;
    skip(arg0: number): number;
}