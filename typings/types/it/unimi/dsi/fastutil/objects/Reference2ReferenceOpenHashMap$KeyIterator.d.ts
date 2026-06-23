import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceOpenHashMap$KeyIterator extends Reference2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<K> {
    constructor(null_: Reference2ReferenceOpenHashMap$KeyIterator)
    acceptOnIndex<K extends unknown>(arg0: (param0: K) => void, arg1: number): void;
    next<K extends unknown>(): K;
    skip(arg0: number): number;
}