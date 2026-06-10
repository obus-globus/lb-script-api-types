import type { Double2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2ShortLinkedOpenHashMap$FastEntryIterator extends Double2ShortLinkedOpenHashMap$MapIterator<(param0: Double2ShortMap$Entry) => void> implements ObjectListIterator<Double2ShortMap$Entry> {
    constructor(null_: Double2ShortLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Double2ShortLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Double2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2ShortMap$Entry) => void, arg1: number): void;
    add(arg0: Double2ShortMap$Entry): void;
    next(): Double2ShortLinkedOpenHashMap$MapEntry;
    previous(): Double2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Double2ShortMap$Entry): void;
}