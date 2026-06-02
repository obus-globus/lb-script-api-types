import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatMap$Entry.d.ts'
import type { Reference2FloatOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatOpenHashMap$MapEntry.d.ts'
import type { Reference2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2FloatOpenHashMap$EntryIterator extends Reference2FloatOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2FloatMap$Entry<K>> {
    private constructor(null_: Reference2FloatOpenHashMap$EntryIterator)
    // private entry: Reference2FloatOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2FloatMap$Entry<K>) => void, arg1: number): void;
    next(): Reference2FloatOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}