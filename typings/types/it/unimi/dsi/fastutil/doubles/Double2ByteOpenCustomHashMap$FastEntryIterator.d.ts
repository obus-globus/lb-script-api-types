import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { Double2ByteOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteOpenCustomHashMap$MapEntry.d.ts'
import type { Double2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2ByteOpenCustomHashMap$FastEntryIterator extends Double2ByteOpenCustomHashMap$MapIterator<(param0: Double2ByteMap$Entry) => void> implements ObjectIterator<Double2ByteMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Double2ByteOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2ByteMap$Entry) => void, arg1: number): void;
    next(): Double2ByteOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}