import type { Object2ObjectLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ObjectLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectLinkedOpenCustomHashMap$FastEntryIterator extends Object2ObjectLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2ObjectMap$Entry<K, V>> {
    constructor(null_: Object2ObjectLinkedOpenCustomHashMap$FastEntryIterator)
    constructor(null_: Object2ObjectLinkedOpenCustomHashMap$FastEntryIterator)
    // private entry: Object2ObjectLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: (param0: Object2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: Object2ObjectMap$Entry<K, V>): void;
    next<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Object2ObjectLinkedOpenCustomHashMap$MapEntry;
    previous<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Object2ObjectLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: Object2ObjectMap$Entry<K, V>): void;
}