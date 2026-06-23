import type { Object2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanLinkedOpenHashMap$FastEntryIterator extends Object2BooleanLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2BooleanMap$Entry<K>> {
    constructor(null_: Object2BooleanLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Object2BooleanLinkedOpenHashMap$FastEntryIterator)
    // private entry: Object2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2BooleanMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2BooleanMap$Entry<K>): void;
    next<K extends unknown>(): Object2BooleanLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Object2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2BooleanMap$Entry<K>): void;
}