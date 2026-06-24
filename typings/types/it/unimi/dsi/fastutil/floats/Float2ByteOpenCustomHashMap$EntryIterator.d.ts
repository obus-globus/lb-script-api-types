import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { Float2ByteOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteOpenCustomHashMap$MapEntry.d.ts'
import type { Float2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ByteOpenCustomHashMap$EntryIterator extends Float2ByteOpenCustomHashMap$MapIterator<(param0: Float2ByteMap$Entry) => void> implements ObjectIterator<Float2ByteMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Float2ByteOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2ByteMap$Entry) => void, arg1: number): void;
    next(): Float2ByteOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}