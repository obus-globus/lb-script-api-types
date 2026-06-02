import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
import type { Int2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteOpenHashMap$MapEntry.d.ts'
import type { Int2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2ByteOpenHashMap$FastEntryIterator extends Int2ByteOpenHashMap$MapIterator<(param0: Int2ByteMap$Entry) => void> implements ObjectIterator<Int2ByteMap$Entry> {
    private constructor(null_: Int2ByteOpenHashMap$FastEntryIterator)
    // private entry: Int2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2ByteMap$Entry) => void, arg1: number): void;
    next(): Int2ByteOpenHashMap$MapEntry;
    skip(arg0: number): number;
}