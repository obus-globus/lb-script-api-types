import type { Double2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2IntLinkedOpenHashMap$FastEntryIterator extends Double2IntLinkedOpenHashMap$MapIterator<(param0: Double2IntMap$Entry) => void> implements ObjectListIterator<Double2IntMap$Entry> {
    constructor(null_: Double2IntLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Double2IntLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Double2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2IntMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2IntLinkedOpenHashMap$MapEntry;
    previous(): Double2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}