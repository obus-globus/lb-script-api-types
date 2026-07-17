import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { Char2ByteOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteOpenCustomHashMap$MapEntry.d.ts'
import type { Char2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2ByteOpenCustomHashMap$FastEntryIterator extends Char2ByteOpenCustomHashMap$MapIterator<(param0: Char2ByteMap$Entry) => void> implements ObjectIterator<Char2ByteMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Char2ByteOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2ByteMap$Entry) => void, arg1: number): void;
    next(): Char2ByteOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}