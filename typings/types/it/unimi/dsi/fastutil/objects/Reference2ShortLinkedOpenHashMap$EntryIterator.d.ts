import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortLinkedOpenHashMap$EntryIterator extends Reference2ShortLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2ShortMap$Entry<K>> {
    constructor(null_: Reference2ShortLinkedOpenHashMap$EntryIterator)
    constructor(null_: Reference2ShortLinkedOpenHashMap$EntryIterator)
    // private entry: Reference2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2ShortMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Reference2ShortLinkedOpenHashMap$MapEntry;
    previous(): Reference2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}