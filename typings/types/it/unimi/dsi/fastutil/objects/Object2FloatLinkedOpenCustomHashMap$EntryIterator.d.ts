import type { Object2FloatLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2FloatLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatLinkedOpenCustomHashMap$EntryIterator extends Object2FloatLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2FloatMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: Object)
    // private entry: Object2FloatLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2FloatMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2FloatMap$Entry<K>): void;
    next<K extends unknown>(): Object2FloatLinkedOpenCustomHashMap$MapEntry;
    previous<K extends unknown>(): Object2FloatLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2FloatMap$Entry<K>): void;
}