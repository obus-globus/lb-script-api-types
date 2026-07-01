import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
import type { Int2DoubleOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleOpenCustomHashMap$MapEntry.d.ts'
import type { Int2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2DoubleOpenCustomHashMap$FastEntryIterator extends Int2DoubleOpenCustomHashMap$MapIterator<(param0: Int2DoubleMap$Entry) => void> implements ObjectIterator<Int2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Int2DoubleOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2DoubleMap$Entry) => void, arg1: number): void;
    next(): Int2DoubleOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}