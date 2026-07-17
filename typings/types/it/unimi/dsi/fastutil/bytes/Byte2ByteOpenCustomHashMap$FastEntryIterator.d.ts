import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { Byte2ByteOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ByteOpenCustomHashMap$FastEntryIterator extends Byte2ByteOpenCustomHashMap$MapIterator<(param0: Byte2ByteMap$Entry) => void> implements ObjectIterator<Byte2ByteMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Byte2ByteOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ByteMap$Entry) => void, arg1: number): void;
    next(): Byte2ByteOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}