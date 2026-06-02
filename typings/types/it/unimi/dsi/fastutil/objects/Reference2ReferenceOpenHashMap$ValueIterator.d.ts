import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceOpenHashMap$ValueIterator extends Reference2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Reference2ReferenceOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: V) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): V;
    skip(arg0: number): number;
}