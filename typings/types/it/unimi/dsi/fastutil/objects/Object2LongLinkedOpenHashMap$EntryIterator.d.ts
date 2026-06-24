import type { Object2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongLinkedOpenHashMap$EntryIterator extends Object2LongLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2LongMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    // private entry: Object2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2LongMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2LongMap$Entry<K>): void;
    next<K extends unknown>(): Object2LongLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Object2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2LongMap$Entry<K>): void;
}