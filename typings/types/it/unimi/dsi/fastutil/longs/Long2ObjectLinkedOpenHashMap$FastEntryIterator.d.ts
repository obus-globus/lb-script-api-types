import type { Long2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectLinkedOpenHashMap$FastEntryIterator extends Long2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Long2ObjectMap$Entry<V>> {
    constructor(null_: Long2ObjectLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Long2ObjectLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Long2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: Long2ObjectMap$Entry<V>) => void, arg1: number): void;
    add<V extends Object | number | string | boolean>(arg0: Long2ObjectMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Long2ObjectLinkedOpenHashMap$MapEntry;
    previous<V extends Object | number | string | boolean>(): Long2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Long2ObjectMap$Entry<V>): void;
}