import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { Long2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteOpenHashMap$MapEntry.d.ts'
import type { Long2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ByteOpenHashMap$FastEntryIterator extends Long2ByteOpenHashMap$MapIterator<(param0: Long2ByteMap$Entry) => void> implements ObjectIterator<Long2ByteMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Long2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2ByteMap$Entry) => void, arg1: number): void;
    next(): Long2ByteOpenHashMap$MapEntry;
    skip(arg0: number): number;
}