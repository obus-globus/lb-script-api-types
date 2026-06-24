import type { Object2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectLinkedOpenHashMap$FastEntryIterator extends Object2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2ObjectMap$Entry<K, V>> {
    constructor(null_: Map<K, V>)
    constructor(null_: Map<K, V>, arg1: K)
    // private entry: Object2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown, V extends unknown>(arg0: (param0: Object2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends unknown, V extends unknown>(arg0: Object2ObjectMap$Entry<K, V>): void;
    next<K extends unknown, V extends unknown>(): Object2ObjectLinkedOpenHashMap$MapEntry;
    previous<K extends unknown, V extends unknown>(): Object2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown, V extends unknown>(arg0: Object2ObjectMap$Entry<K, V>): void;
}