import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { Object2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectOpenCustomHashMap$EntryIterator extends Object2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2ObjectMap$Entry<K, V>> {
    private constructor(null_: Map<Object, Object>)
    // private entry: Object2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown, V extends unknown>(arg0: (param0: Object2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    next<K extends unknown, V extends unknown>(): Object2ObjectOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}