import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { Long2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortOpenHashMap$MapEntry.d.ts'
import type { Long2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ShortOpenHashMap$EntryIterator extends Long2ShortOpenHashMap$MapIterator<(param0: Long2ShortMap$Entry) => void> implements ObjectIterator<Long2ShortMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Long2ShortOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2ShortMap$Entry) => void, arg1: number): void;
    next(): Long2ShortOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}