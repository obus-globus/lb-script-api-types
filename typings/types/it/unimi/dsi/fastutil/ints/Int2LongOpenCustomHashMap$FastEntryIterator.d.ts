import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { Int2LongOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongOpenCustomHashMap$MapEntry.d.ts'
import type { Int2LongOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2LongOpenCustomHashMap$FastEntryIterator extends Int2LongOpenCustomHashMap$MapIterator<(param0: Int2LongMap$Entry) => void> implements ObjectIterator<Int2LongMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Int2LongOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2LongMap$Entry) => void, arg1: number): void;
    next(): Int2LongOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}