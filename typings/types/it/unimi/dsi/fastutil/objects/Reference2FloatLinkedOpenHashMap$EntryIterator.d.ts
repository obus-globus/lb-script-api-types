import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2FloatLinkedOpenHashMap$EntryIterator extends Reference2FloatLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2FloatMap$Entry<K>> {
    constructor(null_: Reference2FloatLinkedOpenHashMap$EntryIterator)
    constructor(null_: Reference2FloatLinkedOpenHashMap$EntryIterator)
    // private entry: Reference2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2FloatMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Reference2FloatLinkedOpenHashMap$MapEntry;
    previous(): Reference2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}