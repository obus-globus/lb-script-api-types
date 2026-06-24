import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { Double2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Double2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanOpenCustomHashMap$FastEntryIterator extends Double2BooleanOpenCustomHashMap$MapIterator<(param0: Double2BooleanMap$Entry) => void> implements ObjectIterator<Double2BooleanMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2BooleanMap$Entry) => void, arg1: number): void;
    next(): Double2BooleanOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}