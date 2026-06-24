import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ByteLinkedOpenHashMap$EntryIterator extends Reference2ByteLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2ByteMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    // private entry: Reference2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2ByteMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Reference2ByteMap$Entry<K>): void;
    next<K extends unknown>(): Reference2ByteLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Reference2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Reference2ByteMap$Entry<K>): void;
}