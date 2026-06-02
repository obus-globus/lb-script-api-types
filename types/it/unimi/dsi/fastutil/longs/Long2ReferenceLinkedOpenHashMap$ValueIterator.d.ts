import type { Long2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceLinkedOpenHashMap$ValueIterator extends Long2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<V> {
    constructor(null_: Long2ReferenceLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: V) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<V extends Object | number | string | boolean>(): V;
    previous<V extends Object | number | string | boolean>(): V;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}