import type { Double2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanLinkedOpenHashMap$EntryIterator extends Double2BooleanLinkedOpenHashMap$MapIterator<(param0: Double2BooleanMap$Entry) => void> implements ObjectListIterator<Double2BooleanMap$Entry> {
    constructor(null_: Double2BooleanLinkedOpenHashMap$EntryIterator)
    constructor(null_: Double2BooleanLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Double2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2BooleanMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Double2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}