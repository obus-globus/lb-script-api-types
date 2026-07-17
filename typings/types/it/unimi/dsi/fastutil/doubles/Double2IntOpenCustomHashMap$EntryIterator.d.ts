import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { Double2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Double2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2IntOpenCustomHashMap$EntryIterator extends Double2IntOpenCustomHashMap$MapIterator<(param0: Double2IntMap$Entry) => void> implements ObjectIterator<Double2IntMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Double2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2IntMap$Entry) => void, arg1: number): void;
    next(): Double2IntOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}