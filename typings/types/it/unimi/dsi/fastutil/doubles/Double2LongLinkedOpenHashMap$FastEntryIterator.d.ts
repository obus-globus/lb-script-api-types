import type { Double2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2LongLinkedOpenHashMap$FastEntryIterator extends Double2LongLinkedOpenHashMap$MapIterator<(param0: Double2LongMap$Entry) => void> implements ObjectListIterator<Double2LongMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Double2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2LongMap$Entry) => void, arg1: number): void;
    add(arg0: Double2LongMap$Entry): void;
    next(): Double2LongLinkedOpenHashMap$MapEntry;
    previous(): Double2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Double2LongMap$Entry): void;
}