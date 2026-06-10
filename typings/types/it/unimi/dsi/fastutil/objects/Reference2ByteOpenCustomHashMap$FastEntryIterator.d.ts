import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Reference2ByteOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteOpenCustomHashMap$MapEntry.d.ts'
import type { Reference2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ByteOpenCustomHashMap$FastEntryIterator extends Reference2ByteOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Reference2ByteMap$Entry<K>> {
    private constructor(null_: Reference2ByteOpenCustomHashMap$FastEntryIterator)
    // private entry: Reference2ByteOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Reference2ByteMap$Entry<K>) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): Reference2ByteOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}