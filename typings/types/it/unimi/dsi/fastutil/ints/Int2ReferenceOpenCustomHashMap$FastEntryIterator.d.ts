import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { Int2ReferenceOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceOpenCustomHashMap$MapEntry.d.ts'
import type { Int2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceOpenCustomHashMap$FastEntryIterator extends Int2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Int2ReferenceMap$Entry<V>> {
    private constructor(null_: { [key: string]: any })
    // private entry: Int2ReferenceOpenCustomHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Int2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Int2ReferenceOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}