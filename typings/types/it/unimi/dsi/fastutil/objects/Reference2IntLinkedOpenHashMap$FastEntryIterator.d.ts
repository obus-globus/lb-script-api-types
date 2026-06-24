import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntLinkedOpenHashMap$FastEntryIterator extends Reference2IntLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2IntMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    // private entry: Reference2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2IntMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Reference2IntMap$Entry<K>): void;
    next<K extends unknown>(): Reference2IntLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Reference2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Reference2IntMap$Entry<K>): void;
}