import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { Float2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Float2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2ReferenceOpenHashMap$EntryIterator extends Float2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Float2ReferenceMap$Entry<V>> {
    private constructor(null_: Float2ReferenceOpenHashMap$EntryIterator)
    // private entry: Float2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next(): Float2ReferenceOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}