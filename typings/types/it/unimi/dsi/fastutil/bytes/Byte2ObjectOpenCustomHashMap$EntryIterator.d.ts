import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { Byte2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectOpenCustomHashMap$EntryIterator extends Byte2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Byte2ObjectMap$Entry<V>> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Byte2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Byte2ObjectOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}