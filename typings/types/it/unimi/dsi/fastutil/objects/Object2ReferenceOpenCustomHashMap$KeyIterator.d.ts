import type { Object2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceOpenCustomHashMap$KeyIterator extends Object2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<K> {
    constructor(null_: Map<Object, Object>)
    acceptOnIndex<K extends unknown>(arg0: (param0: K) => void, arg1: number): void;
    next<K extends unknown>(): K;
    skip(arg0: number): number;
}