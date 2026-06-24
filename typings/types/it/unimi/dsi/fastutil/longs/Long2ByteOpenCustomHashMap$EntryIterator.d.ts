import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { Long2ByteOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteOpenCustomHashMap$MapEntry.d.ts'
import type { Long2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ByteOpenCustomHashMap$EntryIterator extends Long2ByteOpenCustomHashMap$MapIterator<(param0: Long2ByteMap$Entry) => void> implements ObjectIterator<Long2ByteMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Long2ByteOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2ByteMap$Entry) => void, arg1: number): void;
    next(): Long2ByteOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}