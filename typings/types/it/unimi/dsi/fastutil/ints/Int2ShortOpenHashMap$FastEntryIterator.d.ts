import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { Int2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortOpenHashMap$MapEntry.d.ts'
import type { Int2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2ShortOpenHashMap$FastEntryIterator extends Int2ShortOpenHashMap$MapIterator<(param0: Int2ShortMap$Entry) => void> implements ObjectIterator<Int2ShortMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Int2ShortOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2ShortMap$Entry) => void, arg1: number): void;
    next(): Int2ShortOpenHashMap$MapEntry;
    skip(arg0: number): number;
}