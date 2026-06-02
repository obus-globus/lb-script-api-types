import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Short2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Short2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2ObjectOpenCustomHashMap$FastEntryIterator extends Short2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Short2ObjectMap$Entry<V>> {
    private constructor(null_: Short2ObjectOpenCustomHashMap$FastEntryIterator)
    // private entry: Short2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2ObjectMap$Entry<V>) => void, arg1: number): void;
    next(): Short2ObjectOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}