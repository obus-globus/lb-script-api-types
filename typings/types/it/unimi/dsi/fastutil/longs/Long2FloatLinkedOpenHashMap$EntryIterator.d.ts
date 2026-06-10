import type { Long2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2FloatLinkedOpenHashMap$EntryIterator extends Long2FloatLinkedOpenHashMap$MapIterator<(param0: Long2FloatMap$Entry) => void> implements ObjectListIterator<Long2FloatMap$Entry> {
    constructor(null_: Long2FloatLinkedOpenHashMap$EntryIterator)
    constructor(null_: Long2FloatLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Long2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2FloatMap$Entry) => void, arg1: number): void;
    add(arg0: Long2FloatMap$Entry): void;
    next(): Long2FloatLinkedOpenHashMap$MapEntry;
    previous(): Long2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Long2FloatMap$Entry): void;
}