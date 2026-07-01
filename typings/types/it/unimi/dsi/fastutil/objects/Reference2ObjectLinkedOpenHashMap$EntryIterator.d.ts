import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ObjectLinkedOpenHashMap$EntryIterator extends Reference2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2ObjectMap$Entry<K, V>> {
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: Object)
    // private entry: Reference2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown, V extends unknown>(arg0: (param0: Reference2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends unknown, V extends unknown>(arg0: Reference2ObjectMap$Entry<K, V>): void;
    next<K extends unknown, V extends unknown>(): Reference2ObjectLinkedOpenHashMap$MapEntry;
    previous<K extends unknown, V extends unknown>(): Reference2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown, V extends unknown>(arg0: Reference2ObjectMap$Entry<K, V>): void;
}