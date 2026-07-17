import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Reference2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Reference2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2CharLinkedOpenHashMap$FastEntryIterator extends Reference2CharLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Reference2CharMap$Entry<K>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    // private entry: Reference2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2CharMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Reference2CharMap$Entry<K>): void;
    next<K extends unknown>(): Reference2CharLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Reference2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Reference2CharMap$Entry<K>): void;
}