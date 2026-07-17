import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { Long2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Long2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceOpenHashMap$FastEntryIterator extends Long2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Long2ReferenceMap$Entry<V>> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Long2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Long2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Long2ReferenceOpenHashMap$MapEntry;
    skip(arg0: number): number;
}