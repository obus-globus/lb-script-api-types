import type { Double2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortMap$Entry.d.ts'
import type { Double2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortOpenHashMap$MapEntry.d.ts'
import type { Double2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ShortOpenHashMap$EntryIterator extends Double2ShortOpenHashMap$MapIterator<(param0: Double2ShortMap$Entry) => void> implements ObjectIterator<Double2ShortMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2ShortOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2ShortMap$Entry) => void, arg1: number): void;
    next(): Double2ShortOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}