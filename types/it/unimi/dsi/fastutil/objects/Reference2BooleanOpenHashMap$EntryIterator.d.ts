import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Reference2BooleanOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanOpenHashMap$MapEntry.d.ts'
import type { Reference2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2BooleanOpenHashMap$EntryIterator extends Reference2BooleanOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2BooleanMap$Entry<K>> {
    private constructor(null_: Reference2BooleanOpenHashMap$EntryIterator)
    // private entry: Reference2BooleanOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2BooleanMap$Entry<K>) => void, arg1: number): void;
    next(): Reference2BooleanOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}