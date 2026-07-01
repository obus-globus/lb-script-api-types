import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { Char2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteOpenHashMap$MapEntry.d.ts'
import type { Char2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteOpenHashMap$EntryIterator extends Char2ByteOpenHashMap$MapIterator<(param0: Char2ByteMap$Entry) => void> implements ObjectIterator<Char2ByteMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Char2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2ByteMap$Entry) => void, arg1: number): void;
    next(): Char2ByteOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}