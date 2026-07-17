import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { Double2FloatOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatOpenCustomHashMap$MapEntry.d.ts'
import type { Double2FloatOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2FloatOpenCustomHashMap$FastEntryIterator extends Double2FloatOpenCustomHashMap$MapIterator<(param0: Double2FloatMap$Entry) => void> implements ObjectIterator<Double2FloatMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Double2FloatOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2FloatMap$Entry) => void, arg1: number): void;
    next(): Double2FloatOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}