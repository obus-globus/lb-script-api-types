import type { ObjectListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Reference2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Reference2ObjectLinkedOpenHashMap$ValueIterator extends Reference2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<V> {
    constructor(null_: Reference2ObjectLinkedOpenHashMap$ValueIterator)
    acceptOnIndex<V extends unknown>(arg0: (param0: V) => void, arg1: number): void;
    add<V extends unknown>(arg0: V): void;
    next<V extends unknown>(): V;
    previous<V extends unknown>(): V;
    remove(): void;
    set<V extends unknown>(arg0: V): void;
}