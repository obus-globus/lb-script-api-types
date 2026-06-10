import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2LongOpenHashMap$KeyIterator extends Reference2LongOpenHashMap$MapIterator<Object> implements ObjectIterator<K> {
    constructor(null_: Reference2LongOpenHashMap$KeyIterator)
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: K) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): K;
    skip(arg0: number): number;
}