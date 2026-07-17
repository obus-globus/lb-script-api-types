import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { Int2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Int2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectOpenCustomHashMap$FastEntryIterator extends Int2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Int2ObjectMap$Entry<V>> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Int2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Int2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Int2ObjectOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}