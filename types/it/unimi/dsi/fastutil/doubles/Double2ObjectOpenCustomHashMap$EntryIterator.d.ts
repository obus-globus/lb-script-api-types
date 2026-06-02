import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { Double2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Double2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2ObjectOpenCustomHashMap$EntryIterator extends Double2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Double2ObjectMap$Entry<V>> {
    private constructor(null_: Double2ObjectOpenCustomHashMap$EntryIterator)
    // private entry: Double2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2ObjectMap$Entry<V>) => void, arg1: number): void;
    next(): Double2ObjectOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}