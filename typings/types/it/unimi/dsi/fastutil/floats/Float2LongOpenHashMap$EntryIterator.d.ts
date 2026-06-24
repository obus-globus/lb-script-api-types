import type { Float2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongMap$Entry.d.ts'
import type { Float2LongOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongOpenHashMap$MapEntry.d.ts'
import type { Float2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2LongOpenHashMap$EntryIterator extends Float2LongOpenHashMap$MapIterator<(param0: Float2LongMap$Entry) => void> implements ObjectIterator<Float2LongMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Float2LongOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2LongMap$Entry) => void, arg1: number): void;
    next(): Float2LongOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}