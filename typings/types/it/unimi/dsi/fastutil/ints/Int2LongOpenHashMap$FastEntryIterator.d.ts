import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { Int2LongOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongOpenHashMap$MapEntry.d.ts'
import type { Int2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2LongOpenHashMap$FastEntryIterator extends Int2LongOpenHashMap$MapIterator<(param0: Int2LongMap$Entry) => void> implements ObjectIterator<Int2LongMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Int2LongOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2LongMap$Entry) => void, arg1: number): void;
    next(): Int2LongOpenHashMap$MapEntry;
    skip(arg0: number): number;
}