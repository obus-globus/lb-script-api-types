import type { Double2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2IntLinkedOpenHashMap$EntryIterator extends Double2IntLinkedOpenHashMap$MapIterator<(param0: Double2IntMap$Entry) => void> implements ObjectListIterator<Double2IntMap$Entry> {
    constructor(null_: Double2IntLinkedOpenHashMap$EntryIterator)
    constructor(null_: Double2IntLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Double2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2IntMap$Entry) => void, arg1: number): void;
    add(arg0: Double2IntMap$Entry): void;
    next(): Double2IntLinkedOpenHashMap$MapEntry;
    previous(): Double2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Double2IntMap$Entry): void;
}