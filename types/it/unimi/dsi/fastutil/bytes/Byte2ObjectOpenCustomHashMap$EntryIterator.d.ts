import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { Byte2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ObjectOpenCustomHashMap$EntryIterator extends Byte2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Byte2ObjectMap$Entry<V>> {
    private constructor(null_: Byte2ObjectOpenCustomHashMap$EntryIterator)
    // private entry: Byte2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ObjectMap$Entry<V>) => void, arg1: number): void;
    next(): Byte2ObjectOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}