import type { Object2ReferenceLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ReferenceLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceLinkedOpenCustomHashMap$EntryIterator extends Object2ReferenceLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2ReferenceMap$Entry<K, V>> {
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: Object)
    // private entry: Object2ReferenceLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown, V extends unknown>(arg0: (param0: Object2ReferenceMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends unknown, V extends unknown>(arg0: Object2ReferenceMap$Entry<K, V>): void;
    next<K extends unknown, V extends unknown>(): Object2ReferenceLinkedOpenCustomHashMap$MapEntry;
    previous<K extends unknown, V extends unknown>(): Object2ReferenceLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends unknown, V extends unknown>(arg0: Object2ReferenceMap$Entry<K, V>): void;
}