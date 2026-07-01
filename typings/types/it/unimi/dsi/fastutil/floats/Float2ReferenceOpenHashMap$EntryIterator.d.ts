import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { Float2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Float2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceOpenHashMap$EntryIterator extends Float2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Float2ReferenceMap$Entry<V>> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Float2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Float2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Float2ReferenceOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}