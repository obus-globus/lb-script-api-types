import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { Long2ReferenceOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceOpenCustomHashMap$MapEntry.d.ts'
import type { Long2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceOpenCustomHashMap$FastEntryIterator extends Long2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Long2ReferenceMap$Entry<V>> {
    private constructor(null_: Long2ReferenceOpenCustomHashMap$FastEntryIterator)
    // private entry: Long2ReferenceOpenCustomHashMap$MapEntry;
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: Long2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): Long2ReferenceOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}