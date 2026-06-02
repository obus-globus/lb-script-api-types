import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2BooleanLinkedOpenHashMap$EntryIterator extends Reference2BooleanLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2BooleanMap$Entry<K>> {
    constructor(null_: Reference2BooleanLinkedOpenHashMap$EntryIterator)
    constructor(null_: Reference2BooleanLinkedOpenHashMap$EntryIterator)
    // private entry: Reference2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2BooleanMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Reference2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Reference2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}