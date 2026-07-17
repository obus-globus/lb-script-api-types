import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { Byte2LongOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2LongOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2LongOpenCustomHashMap$EntryIterator extends Byte2LongOpenCustomHashMap$MapIterator<(param0: Byte2LongMap$Entry) => void> implements ObjectIterator<Byte2LongMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Byte2LongOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2LongMap$Entry) => void, arg1: number): void;
    next(): Byte2LongOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}