import type { Double2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2FloatLinkedOpenHashMap$FastEntryIterator extends Double2FloatLinkedOpenHashMap$MapIterator<(param0: Double2FloatMap$Entry) => void> implements ObjectListIterator<Double2FloatMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Double2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2FloatMap$Entry) => void, arg1: number): void;
    add(arg0: Double2FloatMap$Entry): void;
    next(): Double2FloatLinkedOpenHashMap$MapEntry;
    previous(): Double2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Double2FloatMap$Entry): void;
}