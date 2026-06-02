import type { Object2ObjectLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ObjectLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectLinkedOpenCustomHashMap$EntryIterator extends Object2ObjectLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2ObjectMap$Entry<K, V>> {
    constructor(null_: Object2ObjectLinkedOpenCustomHashMap$EntryIterator)
    constructor(null_: Object2ObjectLinkedOpenCustomHashMap$EntryIterator)
    // private entry: Object2ObjectLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ObjectLinkedOpenCustomHashMap$MapEntry;
    previous(): Object2ObjectLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}