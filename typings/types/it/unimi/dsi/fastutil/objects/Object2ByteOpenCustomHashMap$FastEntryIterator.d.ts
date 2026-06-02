import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { Object2ByteOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2ByteOpenCustomHashMap$FastEntryIterator extends Object2ByteOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2ByteMap$Entry<K>> {
    private constructor(null_: Object2ByteOpenCustomHashMap$FastEntryIterator)
    // private entry: Object2ByteOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2ByteMap$Entry<K>) => void, arg1: number): void;
    next(): Object2ByteOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}