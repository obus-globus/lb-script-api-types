import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
import type { Float2ShortOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortOpenCustomHashMap$MapEntry.d.ts'
import type { Float2ShortOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ShortOpenCustomHashMap$FastEntryIterator extends Float2ShortOpenCustomHashMap$MapIterator<(param0: Float2ShortMap$Entry) => void> implements ObjectIterator<Float2ShortMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Float2ShortOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2ShortMap$Entry) => void, arg1: number): void;
    next(): Float2ShortOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}