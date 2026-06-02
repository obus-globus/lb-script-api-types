import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ObjectOpenCustomHashMap$ValueIterator extends Reference2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Reference2ObjectOpenCustomHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: V) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): V;
    skip(arg0: number): number;
}