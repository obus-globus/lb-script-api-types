import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortOpenHashMap$KeyIterator extends Object2ShortOpenHashMap$MapIterator<Object> implements ObjectIterator<K> {
    constructor(null_: JavaMap<any, any>)
    acceptOnIndex<K extends unknown>(arg0: (param0: K) => void, arg1: number): void;
    next<K extends unknown>(): K;
    skip(arg0: number): number;
}