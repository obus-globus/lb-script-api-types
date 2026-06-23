import type { Float2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceOpenHashMap$ValueIterator extends Float2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Float2ReferenceOpenHashMap$ValueIterator)
    acceptOnIndex<V extends unknown>(arg0: (param0: V) => void, arg1: number): void;
    next<V extends unknown>(): V;
    skip(arg0: number): number;
}