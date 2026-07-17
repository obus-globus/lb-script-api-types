import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceLinkedOpenHashMap$EntryIterator extends Reference2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2ReferenceMap$Entry<K, V>> {
    constructor(null_: JavaMap<Object, Object>)
    constructor(null_: JavaMap<Object, Object>, arg1: Object)
    // private entry: Reference2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown, V extends unknown>(arg0: (param0: Reference2ReferenceMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends unknown, V extends unknown>(arg0: Reference2ReferenceMap$Entry<K, V>): void;
    next<K extends unknown, V extends unknown>(): Reference2ReferenceLinkedOpenHashMap$MapEntry;
    previous<K extends unknown, V extends unknown>(): Reference2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown, V extends unknown>(arg0: Reference2ReferenceMap$Entry<K, V>): void;
}