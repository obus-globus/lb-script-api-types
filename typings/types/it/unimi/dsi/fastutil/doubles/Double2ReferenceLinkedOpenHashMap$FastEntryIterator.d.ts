import type { Double2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceLinkedOpenHashMap$FastEntryIterator extends Double2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Double2ReferenceMap$Entry<V>> {
    constructor(null_: Double2ReferenceLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Double2ReferenceLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Double2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2ReferenceMap$Entry<V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2ReferenceLinkedOpenHashMap$MapEntry;
    previous(): Double2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}