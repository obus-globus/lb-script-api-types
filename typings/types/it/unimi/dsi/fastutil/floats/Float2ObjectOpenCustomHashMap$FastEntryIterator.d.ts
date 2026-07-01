import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { Float2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Float2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectOpenCustomHashMap$FastEntryIterator extends Float2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Float2ObjectMap$Entry<V>> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Float2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Float2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Float2ObjectOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}