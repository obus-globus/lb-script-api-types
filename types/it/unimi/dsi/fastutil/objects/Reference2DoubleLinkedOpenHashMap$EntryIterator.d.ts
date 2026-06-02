import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2DoubleLinkedOpenHashMap$EntryIterator extends Reference2DoubleLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2DoubleMap$Entry<K>> {
    constructor(null_: Reference2DoubleLinkedOpenHashMap$EntryIterator)
    constructor(null_: Reference2DoubleLinkedOpenHashMap$EntryIterator)
    // private entry: Reference2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2DoubleMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Reference2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Reference2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}