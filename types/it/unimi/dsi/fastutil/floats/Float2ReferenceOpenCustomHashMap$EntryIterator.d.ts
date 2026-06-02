import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { Float2ReferenceOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceOpenCustomHashMap$MapEntry.d.ts'
import type { Float2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2ReferenceOpenCustomHashMap$EntryIterator extends Float2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Float2ReferenceMap$Entry<V>> {
    private constructor(null_: Float2ReferenceOpenCustomHashMap$EntryIterator)
    // private entry: Float2ReferenceOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next(): Float2ReferenceOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}