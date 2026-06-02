import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { Int2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Int2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2ReferenceOpenHashMap$FastEntryIterator extends Int2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Int2ReferenceMap$Entry<V>> {
    private constructor(null_: Int2ReferenceOpenHashMap$FastEntryIterator)
    // private entry: Int2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next(): Int2ReferenceOpenHashMap$MapEntry;
    skip(arg0: number): number;
}