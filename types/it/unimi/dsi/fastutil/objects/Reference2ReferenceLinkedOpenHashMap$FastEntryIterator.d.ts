import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceLinkedOpenHashMap$FastEntryIterator extends Reference2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2ReferenceMap$Entry<K, V>> {
    constructor(null_: Reference2ReferenceLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Reference2ReferenceLinkedOpenHashMap$FastEntryIterator)
    // private entry: Reference2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2ReferenceMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Reference2ReferenceLinkedOpenHashMap$MapEntry;
    previous(): Reference2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}