import type { Object2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectOpenHashMap$KeyIterator extends Object2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<K> {
    constructor(null_: Map<K, V>)
    acceptOnIndex<K extends unknown>(arg0: (param0: K) => void, arg1: number): void;
    next<K extends unknown>(): K;
    skip(arg0: number): number;
}