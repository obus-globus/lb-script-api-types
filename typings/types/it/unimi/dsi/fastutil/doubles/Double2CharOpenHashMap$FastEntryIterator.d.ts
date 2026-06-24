import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
import type { Double2CharOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharOpenHashMap$MapEntry.d.ts'
import type { Double2CharOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2CharOpenHashMap$FastEntryIterator extends Double2CharOpenHashMap$MapIterator<(param0: Double2CharMap$Entry) => void> implements ObjectIterator<Double2CharMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2CharOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2CharMap$Entry) => void, arg1: number): void;
    next(): Double2CharOpenHashMap$MapEntry;
    skip(arg0: number): number;
}