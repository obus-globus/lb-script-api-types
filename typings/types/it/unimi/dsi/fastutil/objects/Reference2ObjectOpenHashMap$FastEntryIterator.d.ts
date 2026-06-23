import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { Reference2ObjectOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectOpenHashMap$MapEntry.d.ts'
import type { Reference2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ObjectOpenHashMap$FastEntryIterator extends Reference2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2ObjectMap$Entry<K, V>> {
    private constructor(null_: Reference2ObjectOpenHashMap$FastEntryIterator)
    // private entry: Reference2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown, V extends unknown>(arg0: (param0: Reference2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    next<K extends unknown, V extends unknown>(): Reference2ObjectOpenHashMap$MapEntry;
    skip(arg0: number): number;
}