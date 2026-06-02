import type { Object2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectOpenHashMap$ValueIterator extends Object2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Object2ObjectOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: V) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): V;
    skip(arg0: number): number;
}