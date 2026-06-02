import type { Int2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceLinkedOpenHashMap$EntryIterator extends Int2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Int2ReferenceMap$Entry<V>> {
    constructor(null_: Int2ReferenceLinkedOpenHashMap$EntryIterator)
    constructor(null_: Int2ReferenceLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Int2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2ReferenceMap$Entry<V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2ReferenceLinkedOpenHashMap$MapEntry;
    previous(): Int2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}