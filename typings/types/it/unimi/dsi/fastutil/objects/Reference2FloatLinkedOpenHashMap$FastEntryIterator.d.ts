import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2FloatLinkedOpenHashMap$FastEntryIterator extends Reference2FloatLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2FloatMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    // private entry: Reference2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2FloatMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Reference2FloatMap$Entry<K>): void;
    next<K extends unknown>(): Reference2FloatLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Reference2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Reference2FloatMap$Entry<K>): void;
}