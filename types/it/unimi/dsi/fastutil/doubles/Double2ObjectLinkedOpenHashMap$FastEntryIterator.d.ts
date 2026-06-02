import type { Double2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectLinkedOpenHashMap$FastEntryIterator extends Double2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Double2ObjectMap$Entry<V>> {
    constructor(null_: Double2ObjectLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Double2ObjectLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Double2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2ObjectMap$Entry<V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2ObjectLinkedOpenHashMap$MapEntry;
    previous(): Double2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}