import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { Double2BooleanOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanOpenHashMap$MapEntry.d.ts'
import type { Double2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanOpenHashMap$FastEntryIterator extends Double2BooleanOpenHashMap$MapIterator<(param0: Double2BooleanMap$Entry) => void> implements ObjectIterator<Double2BooleanMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2BooleanOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2BooleanMap$Entry) => void, arg1: number): void;
    next(): Double2BooleanOpenHashMap$MapEntry;
    skip(arg0: number): number;
}