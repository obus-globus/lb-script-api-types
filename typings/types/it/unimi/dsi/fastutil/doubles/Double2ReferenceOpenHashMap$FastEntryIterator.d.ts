import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { Double2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Double2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceOpenHashMap$FastEntryIterator extends Double2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Double2ReferenceMap$Entry<V>> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Double2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Double2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Double2ReferenceOpenHashMap$MapEntry;
    skip(arg0: number): number;
}