import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { Double2ReferenceOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceOpenCustomHashMap$MapEntry.d.ts'
import type { Double2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2ReferenceOpenCustomHashMap$EntryIterator extends Double2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Double2ReferenceMap$Entry<V>> {
    private constructor(null_: Double2ReferenceOpenCustomHashMap$EntryIterator)
    // private entry: Double2ReferenceOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next(): Double2ReferenceOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}