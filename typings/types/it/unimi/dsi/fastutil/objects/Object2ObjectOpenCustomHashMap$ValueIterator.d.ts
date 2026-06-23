import type { Object2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectOpenCustomHashMap$ValueIterator extends Object2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Object2ObjectOpenCustomHashMap$ValueIterator)
    acceptOnIndex<V extends unknown>(arg0: (param0: V) => void, arg1: number): void;
    next<V extends unknown>(): V;
    skip(arg0: number): number;
}