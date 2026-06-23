import type { Object2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteLinkedOpenHashMap$EntryIterator extends Object2ByteLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2ByteMap$Entry<K>> {
    constructor(null_: Object2ByteLinkedOpenHashMap$EntryIterator)
    constructor(null_: Object2ByteLinkedOpenHashMap$EntryIterator)
    // private entry: Object2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2ByteMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2ByteMap$Entry<K>): void;
    next<K extends unknown>(): Object2ByteLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Object2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2ByteMap$Entry<K>): void;
}