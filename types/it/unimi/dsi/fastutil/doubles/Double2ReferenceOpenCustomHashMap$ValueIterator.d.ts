import type { Double2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceOpenCustomHashMap$ValueIterator extends Double2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Double2ReferenceOpenCustomHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: V) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): V;
    skip(arg0: number): number;
}