import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { Double2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteOpenHashMap$MapEntry.d.ts'
import type { Double2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ByteOpenHashMap$EntryIterator extends Double2ByteOpenHashMap$MapIterator<(param0: Double2ByteMap$Entry) => void> implements ObjectIterator<Double2ByteMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2ByteMap$Entry) => void, arg1: number): void;
    next(): Double2ByteOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}