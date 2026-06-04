import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntLinkedOpenHashMap$EntryIterator extends Reference2IntLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2IntMap$Entry<K>> {
    constructor(null_: Reference2IntLinkedOpenHashMap$EntryIterator)
    constructor(null_: Reference2IntLinkedOpenHashMap$EntryIterator)
    // private entry: Reference2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2IntMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Reference2IntLinkedOpenHashMap$MapEntry;
    previous(): Reference2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}