import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Short2ObjectOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectOpenHashMap$MapEntry.d.ts'
import type { Short2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectOpenHashMap$FastEntryIterator extends Short2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Short2ObjectMap$Entry<V>> {
    private constructor(null_: { [key: string]: any })
    // private entry: Short2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Short2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Short2ObjectOpenHashMap$MapEntry;
    skip(arg0: number): number;
}