import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { Float2ByteOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteOpenHashMap$MapEntry.d.ts'
import type { Float2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ByteOpenHashMap$EntryIterator extends Float2ByteOpenHashMap$MapIterator<(param0: Float2ByteMap$Entry) => void> implements ObjectIterator<Float2ByteMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Float2ByteOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2ByteMap$Entry) => void, arg1: number): void;
    next(): Float2ByteOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}