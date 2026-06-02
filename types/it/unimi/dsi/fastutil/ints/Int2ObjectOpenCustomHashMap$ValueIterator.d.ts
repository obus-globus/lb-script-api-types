import type { Int2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectOpenCustomHashMap$ValueIterator extends Int2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Int2ObjectOpenCustomHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: V) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): V;
    skip(arg0: number): number;
}