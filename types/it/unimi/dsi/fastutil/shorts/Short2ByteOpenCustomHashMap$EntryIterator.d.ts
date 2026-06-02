import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteMap$Entry.d.ts'
import type { Short2ByteOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteOpenCustomHashMap$MapEntry.d.ts'
import type { Short2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2ByteOpenCustomHashMap$EntryIterator extends Short2ByteOpenCustomHashMap$MapIterator<(param0: Short2ByteMap$Entry) => void> implements ObjectIterator<Short2ByteMap$Entry> {
    private constructor(null_: Short2ByteOpenCustomHashMap$EntryIterator)
    // private entry: Short2ByteOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2ByteMap$Entry) => void, arg1: number): void;
    next(): Short2ByteOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}