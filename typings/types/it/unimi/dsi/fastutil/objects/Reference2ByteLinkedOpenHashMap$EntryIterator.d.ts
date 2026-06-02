import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ByteLinkedOpenHashMap$EntryIterator extends Reference2ByteLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2ByteMap$Entry<K>> {
    constructor(null_: Reference2ByteLinkedOpenHashMap$EntryIterator)
    constructor(null_: Reference2ByteLinkedOpenHashMap$EntryIterator)
    // private entry: Reference2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2ByteMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Reference2ByteLinkedOpenHashMap$MapEntry;
    previous(): Reference2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}