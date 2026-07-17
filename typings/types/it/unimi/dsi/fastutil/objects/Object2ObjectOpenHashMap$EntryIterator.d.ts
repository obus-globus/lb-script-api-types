import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { Object2ObjectOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectOpenHashMap$MapEntry.d.ts'
import type { Object2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectOpenHashMap$EntryIterator extends Object2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2ObjectMap$Entry<K, V>> {
    private constructor(null_: Map<Object, Object>)
    // private entry: Object2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown, V extends unknown>(arg0: (param0: Object2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    next<K extends unknown, V extends unknown>(): Object2ObjectOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}