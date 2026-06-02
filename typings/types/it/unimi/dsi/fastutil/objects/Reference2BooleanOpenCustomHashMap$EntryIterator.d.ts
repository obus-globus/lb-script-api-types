import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Reference2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Reference2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2BooleanOpenCustomHashMap$EntryIterator extends Reference2BooleanOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Reference2BooleanMap$Entry<K>> {
    private constructor(null_: Reference2BooleanOpenCustomHashMap$EntryIterator)
    // private entry: Reference2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2BooleanMap$Entry<K>) => void, arg1: number): void;
    next(): Reference2BooleanOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}