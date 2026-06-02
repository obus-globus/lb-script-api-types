import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2IntOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntOpenHashMap$KeyIterator extends Reference2IntOpenHashMap$MapIterator<Object> implements ObjectIterator<K> {
    constructor(null_: Reference2IntOpenHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: K) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): K;
    skip(arg0: number): number;
}