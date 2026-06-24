import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2BooleanLinkedOpenHashMap$EntryIterator extends Reference2BooleanLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2BooleanMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    // private entry: Reference2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2BooleanMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Reference2BooleanMap$Entry<K>): void;
    next<K extends unknown>(): Reference2BooleanLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Reference2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Reference2BooleanMap$Entry<K>): void;
}