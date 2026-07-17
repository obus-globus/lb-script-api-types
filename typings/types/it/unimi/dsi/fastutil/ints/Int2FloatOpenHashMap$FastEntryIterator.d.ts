import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { Int2FloatOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatOpenHashMap$MapEntry.d.ts'
import type { Int2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2FloatOpenHashMap$FastEntryIterator extends Int2FloatOpenHashMap$MapIterator<(param0: Int2FloatMap$Entry) => void> implements ObjectIterator<Int2FloatMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Int2FloatOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2FloatMap$Entry) => void, arg1: number): void;
    next(): Int2FloatOpenHashMap$MapEntry;
    skip(arg0: number): number;
}