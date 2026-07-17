import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { Byte2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteOpenHashMap$MapEntry.d.ts'
import type { Byte2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ByteOpenHashMap$EntryIterator extends Byte2ByteOpenHashMap$MapIterator<(param0: Byte2ByteMap$Entry) => void> implements ObjectIterator<Byte2ByteMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Byte2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ByteMap$Entry) => void, arg1: number): void;
    next(): Byte2ByteOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}