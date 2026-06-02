import type { Object2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatLinkedOpenHashMap$FastEntryIterator extends Object2FloatLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2FloatMap$Entry<K>> {
    constructor(null_: Object2FloatLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Object2FloatLinkedOpenHashMap$FastEntryIterator)
    // private entry: Object2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2FloatMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2FloatLinkedOpenHashMap$MapEntry;
    previous(): Object2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}