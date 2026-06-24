import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { Long2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleOpenHashMap$MapEntry.d.ts'
import type { Long2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleOpenHashMap$EntryIterator extends Long2DoubleOpenHashMap$MapIterator<(param0: Long2DoubleMap$Entry) => void> implements ObjectIterator<Long2DoubleMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Long2DoubleOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2DoubleMap$Entry) => void, arg1: number): void;
    next(): Long2DoubleOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}