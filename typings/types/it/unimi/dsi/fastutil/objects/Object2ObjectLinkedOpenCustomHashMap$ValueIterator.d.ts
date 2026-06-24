import type { Object2ObjectLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectLinkedOpenCustomHashMap$ValueIterator extends Object2ObjectLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<V> {
    constructor(null_: Map<K, V>)
    acceptOnIndex<V extends unknown>(arg0: (param0: V) => void, arg1: number): void;
    add<V extends unknown>(arg0: V): void;
    next<V extends unknown>(): V;
    previous<V extends unknown>(): V;
    remove(): void;
    set<V extends unknown>(arg0: V): void;
}