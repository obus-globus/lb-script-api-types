import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleMap$Entry.d.ts'
import type { Reference2DoubleOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleOpenCustomHashMap$MapEntry.d.ts'
import type { Reference2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2DoubleOpenCustomHashMap$EntryIterator extends Reference2DoubleOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Reference2DoubleMap$Entry<K>> {
    private constructor(null_: Reference2DoubleOpenCustomHashMap$EntryIterator)
    // private entry: Reference2DoubleOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2DoubleMap$Entry<K>) => void, arg1: number): void;
    next(): Reference2DoubleOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}