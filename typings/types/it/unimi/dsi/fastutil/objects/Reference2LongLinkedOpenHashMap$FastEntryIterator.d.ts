import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2LongLinkedOpenHashMap$FastEntryIterator extends Reference2LongLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2LongMap$Entry<K>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    // private entry: Reference2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2LongMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Reference2LongMap$Entry<K>): void;
    next<K extends unknown>(): Reference2LongLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Reference2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Reference2LongMap$Entry<K>): void;
}