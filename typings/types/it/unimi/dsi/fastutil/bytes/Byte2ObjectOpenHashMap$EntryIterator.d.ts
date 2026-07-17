import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { Byte2ObjectOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectOpenHashMap$MapEntry.d.ts'
import type { Byte2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectOpenHashMap$EntryIterator extends Byte2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Byte2ObjectMap$Entry<V>> {
    private constructor(null_: { [key: string]: any })
    // private entry: Byte2ObjectOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Byte2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Byte2ObjectOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}