import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { Double2ObjectOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectOpenHashMap$MapEntry.d.ts'
import type { Double2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectOpenHashMap$FastEntryIterator extends Double2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Double2ObjectMap$Entry<V>> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Double2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Double2ObjectOpenHashMap$MapEntry;
    skip(arg0: number): number;
}