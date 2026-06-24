import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { Double2IntOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntOpenHashMap$MapEntry.d.ts'
import type { Double2IntOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2IntOpenHashMap$FastEntryIterator extends Double2IntOpenHashMap$MapIterator<(param0: Double2IntMap$Entry) => void> implements ObjectIterator<Double2IntMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2IntOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2IntMap$Entry) => void, arg1: number): void;
    next(): Double2IntOpenHashMap$MapEntry;
    skip(arg0: number): number;
}