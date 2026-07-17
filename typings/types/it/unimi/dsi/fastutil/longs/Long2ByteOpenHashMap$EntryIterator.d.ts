import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { Long2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteOpenHashMap$MapEntry.d.ts'
import type { Long2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2ByteOpenHashMap$EntryIterator extends Long2ByteOpenHashMap$MapIterator<(param0: Long2ByteMap$Entry) => void> implements ObjectIterator<Long2ByteMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Long2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2ByteMap$Entry) => void, arg1: number): void;
    next(): Long2ByteOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}