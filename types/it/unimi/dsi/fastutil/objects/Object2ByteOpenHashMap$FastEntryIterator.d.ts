import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { Object2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteOpenHashMap$MapEntry.d.ts'
import type { Object2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2ByteOpenHashMap$FastEntryIterator extends Object2ByteOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2ByteMap$Entry<K>> {
    private constructor(null_: Object2ByteOpenHashMap$FastEntryIterator)
    // private entry: Object2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2ByteMap$Entry<K>) => void, arg1: number): void;
    next(): Object2ByteOpenHashMap$MapEntry;
    skip(arg0: number): number;
}