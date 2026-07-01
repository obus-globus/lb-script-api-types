import type { Object2ObjectLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ObjectLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectLinkedOpenCustomHashMap$FastEntryIterator extends Object2ObjectLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2ObjectMap$Entry<K, V>> {
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: Object)
    // private entry: Object2ObjectLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown, V extends unknown>(arg0: (param0: Object2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends unknown, V extends unknown>(arg0: Object2ObjectMap$Entry<K, V>): void;
    next<K extends unknown, V extends unknown>(): Object2ObjectLinkedOpenCustomHashMap$MapEntry;
    previous<K extends unknown, V extends unknown>(): Object2ObjectLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends unknown, V extends unknown>(arg0: Object2ObjectMap$Entry<K, V>): void;
}