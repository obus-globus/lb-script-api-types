import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Reference2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteOpenHashMap$MapEntry.d.ts'
import type { Reference2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2ByteOpenHashMap$FastEntryIterator extends Reference2ByteOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2ByteMap$Entry<K>> {
    private constructor(null_: Reference2ByteOpenHashMap$FastEntryIterator)
    // private entry: Reference2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2ByteMap$Entry<K>) => void, arg1: number): void;
    next(): Reference2ByteOpenHashMap$MapEntry;
    skip(arg0: number): number;
}