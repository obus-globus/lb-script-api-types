import type { Object2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceOpenCustomHashMap$ValueIterator extends Object2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Object2ReferenceOpenCustomHashMap$ValueIterator)
    acceptOnIndex<V extends unknown>(arg0: (param0: V) => void, arg1: number): void;
    next<V extends unknown>(): V;
    skip(arg0: number): number;
}