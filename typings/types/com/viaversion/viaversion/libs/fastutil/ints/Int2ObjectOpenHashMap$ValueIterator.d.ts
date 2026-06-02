import type { Int2ObjectOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Int2ObjectOpenHashMap$ValueIterator extends Int2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Int2ObjectOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: V) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): V;
    skip(arg0: number): number;
}