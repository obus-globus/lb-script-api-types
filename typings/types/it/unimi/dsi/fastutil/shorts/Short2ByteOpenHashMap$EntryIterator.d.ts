import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteMap$Entry.d.ts'
import type { Short2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteOpenHashMap$MapEntry.d.ts'
import type { Short2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2ByteOpenHashMap$EntryIterator extends Short2ByteOpenHashMap$MapIterator<(param0: Short2ByteMap$Entry) => void> implements ObjectIterator<Short2ByteMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Short2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2ByteMap$Entry) => void, arg1: number): void;
    next(): Short2ByteOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}