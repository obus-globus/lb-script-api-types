import type { Long2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceLinkedOpenHashMap$EntryIterator extends Long2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Long2ReferenceMap$Entry<V>> {
    constructor(null_: Long2ReferenceLinkedOpenHashMap$EntryIterator)
    constructor(null_: Long2ReferenceLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Long2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2ReferenceMap$Entry<V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2ReferenceLinkedOpenHashMap$MapEntry;
    previous(): Long2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}