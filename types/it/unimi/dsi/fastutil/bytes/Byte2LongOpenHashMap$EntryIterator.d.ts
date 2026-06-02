import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { Byte2LongOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongOpenHashMap$MapEntry.d.ts'
import type { Byte2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2LongOpenHashMap$EntryIterator extends Byte2LongOpenHashMap$MapIterator<(param0: Byte2LongMap$Entry) => void> implements ObjectIterator<Byte2LongMap$Entry> {
    private constructor(null_: Byte2LongOpenHashMap$EntryIterator)
    // private entry: Byte2LongOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2LongMap$Entry) => void, arg1: number): void;
    next(): Byte2LongOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}