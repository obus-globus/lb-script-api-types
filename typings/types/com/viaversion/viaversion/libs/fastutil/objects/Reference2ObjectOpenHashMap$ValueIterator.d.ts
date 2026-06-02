import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ObjectOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Reference2ObjectOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Reference2ObjectOpenHashMap$ValueIterator extends Reference2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Reference2ObjectOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: V) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): V;
    skip(arg0: number): number;
}