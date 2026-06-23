import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { Int2ObjectOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectOpenHashMap$MapEntry.d.ts'
import type { Int2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectOpenHashMap$FastEntryIterator extends Int2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Int2ObjectMap$Entry<V>> {
    private constructor(null_: Int2ObjectOpenHashMap$FastEntryIterator)
    // private entry: Int2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Int2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Int2ObjectOpenHashMap$MapEntry;
    skip(arg0: number): number;
}