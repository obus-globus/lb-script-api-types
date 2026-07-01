import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharMap$Entry.d.ts'
import type { Reference2CharOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharOpenHashMap$MapEntry.d.ts'
import type { Reference2CharOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2CharOpenHashMap$FastEntryIterator extends Reference2CharOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2CharMap$Entry<K>> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Reference2CharOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2CharMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Reference2CharOpenHashMap$MapEntry;
    skip(arg0: number): number;
}