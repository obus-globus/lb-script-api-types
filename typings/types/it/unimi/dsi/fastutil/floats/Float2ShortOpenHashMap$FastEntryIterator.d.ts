import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
import type { Float2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortOpenHashMap$MapEntry.d.ts'
import type { Float2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ShortOpenHashMap$FastEntryIterator extends Float2ShortOpenHashMap$MapIterator<(param0: Float2ShortMap$Entry) => void> implements ObjectIterator<Float2ShortMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Float2ShortOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2ShortMap$Entry) => void, arg1: number): void;
    next(): Float2ShortOpenHashMap$MapEntry;
    skip(arg0: number): number;
}