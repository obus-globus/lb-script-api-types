import type { Double2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2FloatLinkedOpenHashMap$EntryIterator extends Double2FloatLinkedOpenHashMap$MapIterator<(param0: Double2FloatMap$Entry) => void> implements ObjectListIterator<Double2FloatMap$Entry> {
    constructor(null_: Double2FloatLinkedOpenHashMap$EntryIterator)
    constructor(null_: Double2FloatLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Double2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2FloatMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2FloatLinkedOpenHashMap$MapEntry;
    previous(): Double2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}