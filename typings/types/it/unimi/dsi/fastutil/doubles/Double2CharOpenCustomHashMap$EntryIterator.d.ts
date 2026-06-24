import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
import type { Double2CharOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharOpenCustomHashMap$MapEntry.d.ts'
import type { Double2CharOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2CharOpenCustomHashMap$EntryIterator extends Double2CharOpenCustomHashMap$MapIterator<(param0: Double2CharMap$Entry) => void> implements ObjectIterator<Double2CharMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2CharOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2CharMap$Entry) => void, arg1: number): void;
    next(): Double2CharOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}