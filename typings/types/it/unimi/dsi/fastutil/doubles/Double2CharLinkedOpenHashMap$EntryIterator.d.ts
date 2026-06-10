import type { Double2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2CharLinkedOpenHashMap$EntryIterator extends Double2CharLinkedOpenHashMap$MapIterator<(param0: Double2CharMap$Entry) => void> implements ObjectListIterator<Double2CharMap$Entry> {
    constructor(null_: Double2CharLinkedOpenHashMap$EntryIterator)
    constructor(null_: Double2CharLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Double2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2CharMap$Entry) => void, arg1: number): void;
    add(arg0: Double2CharMap$Entry): void;
    next(): Double2CharLinkedOpenHashMap$MapEntry;
    previous(): Double2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Double2CharMap$Entry): void;
}