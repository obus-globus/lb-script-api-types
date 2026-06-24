import type { Double2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceLinkedOpenHashMap$EntryIterator extends Double2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Double2ReferenceMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Double2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Double2ReferenceMap$Entry<V>) => void, arg1: number): void;
    add<V extends unknown>(arg0: Double2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Double2ReferenceLinkedOpenHashMap$MapEntry;
    previous<V extends unknown>(): Double2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends unknown>(arg0: Double2ReferenceMap$Entry<V>): void;
}