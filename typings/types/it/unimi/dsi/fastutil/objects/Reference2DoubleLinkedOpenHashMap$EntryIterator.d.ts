import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2DoubleLinkedOpenHashMap$EntryIterator extends Reference2DoubleLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2DoubleMap$Entry<K>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    // private entry: Reference2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2DoubleMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Reference2DoubleMap$Entry<K>): void;
    next<K extends unknown>(): Reference2DoubleLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Reference2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Reference2DoubleMap$Entry<K>): void;
}