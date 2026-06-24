import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Reference2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteOpenHashMap$MapEntry.d.ts'
import type { Reference2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ByteOpenHashMap$FastEntryIterator extends Reference2ByteOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2ByteMap$Entry<K>> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Reference2ByteOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2ByteMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Reference2ByteOpenHashMap$MapEntry;
    skip(arg0: number): number;
}