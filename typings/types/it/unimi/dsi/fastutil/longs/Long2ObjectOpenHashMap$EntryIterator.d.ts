import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { Long2ObjectOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectOpenHashMap$MapEntry.d.ts'
import type { Long2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectOpenHashMap$EntryIterator extends Long2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Long2ObjectMap$Entry<V>> {
    private constructor(null_: { [key: string]: any })
    // private entry: Long2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Long2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Long2ObjectOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}