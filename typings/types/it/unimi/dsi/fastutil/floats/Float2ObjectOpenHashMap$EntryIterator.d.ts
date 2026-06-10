import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { Float2ObjectOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectOpenHashMap$MapEntry.d.ts'
import type { Float2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectOpenHashMap$EntryIterator extends Float2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Float2ObjectMap$Entry<V>> {
    private constructor(null_: Float2ObjectOpenHashMap$EntryIterator)
    // private entry: Float2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: Float2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): Float2ObjectOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}