import type { Object2FloatLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2FloatLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatLinkedOpenCustomHashMap$EntryIterator extends Object2FloatLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2FloatMap$Entry<K>> {
    constructor(null_: Object2FloatLinkedOpenCustomHashMap$EntryIterator)
    constructor(null_: Object2FloatLinkedOpenCustomHashMap$EntryIterator)
    // private entry: Object2FloatLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2FloatMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2FloatLinkedOpenCustomHashMap$MapEntry;
    previous(): Object2FloatLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}