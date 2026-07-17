import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortLinkedOpenHashMap$FastEntryIterator extends Reference2ShortLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2ShortMap$Entry<K>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    // private entry: Reference2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2ShortMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Reference2ShortMap$Entry<K>): void;
    next<K extends unknown>(): Reference2ShortLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Reference2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Reference2ShortMap$Entry<K>): void;
}