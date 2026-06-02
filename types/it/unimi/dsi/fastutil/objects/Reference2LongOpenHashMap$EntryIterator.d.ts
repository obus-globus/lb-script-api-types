import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongMap$Entry.d.ts'
import type { Reference2LongOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongOpenHashMap$MapEntry.d.ts'
import type { Reference2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2LongOpenHashMap$EntryIterator extends Reference2LongOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2LongMap$Entry<K>> {
    private constructor(null_: Reference2LongOpenHashMap$EntryIterator)
    // private entry: Reference2LongOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2LongMap$Entry<K>) => void, arg1: number): void;
    next(): Reference2LongOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}