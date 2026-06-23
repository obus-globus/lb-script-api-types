import type { Object2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleLinkedOpenHashMap$EntryIterator extends Object2DoubleLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2DoubleMap$Entry<K>> {
    constructor(null_: Object2DoubleLinkedOpenHashMap$EntryIterator)
    constructor(null_: Object2DoubleLinkedOpenHashMap$EntryIterator)
    // private entry: Object2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2DoubleMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2DoubleMap$Entry<K>): void;
    next<K extends unknown>(): Object2DoubleLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Object2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2DoubleMap$Entry<K>): void;
}