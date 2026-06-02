import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { Reference2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Reference2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2ObjectOpenCustomHashMap$FastEntryIterator extends Reference2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Reference2ObjectMap$Entry<K, V>> {
    private constructor(null_: Reference2ObjectOpenCustomHashMap$FastEntryIterator)
    // private entry: Reference2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    next(): Reference2ObjectOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}