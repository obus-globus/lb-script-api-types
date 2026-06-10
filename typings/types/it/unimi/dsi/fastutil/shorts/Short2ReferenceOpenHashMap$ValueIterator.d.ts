import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceOpenHashMap$ValueIterator extends Short2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Short2ReferenceOpenHashMap$ValueIterator)
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: V) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): V;
    skip(arg0: number): number;
}