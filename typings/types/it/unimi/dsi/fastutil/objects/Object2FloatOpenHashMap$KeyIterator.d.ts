import type { Object2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatOpenHashMap$KeyIterator extends Object2FloatOpenHashMap$MapIterator<Object> implements ObjectIterator<K> {
    constructor(null_: Object2FloatOpenHashMap$KeyIterator)
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: K) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): K;
    skip(arg0: number): number;
}