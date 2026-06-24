import type { Object2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatLinkedOpenHashMap$EntryIterator extends Object2FloatLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2FloatMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    // private entry: Object2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2FloatMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2FloatMap$Entry<K>): void;
    next<K extends unknown>(): Object2FloatLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Object2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2FloatMap$Entry<K>): void;
}