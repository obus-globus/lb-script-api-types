import type { Object2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntLinkedOpenHashMap$FastEntryIterator extends Object2IntLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2IntMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    // private entry: Object2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2IntMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2IntMap$Entry<K>): void;
    next<K extends unknown>(): Object2IntLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Object2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2IntMap$Entry<K>): void;
}