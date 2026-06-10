import type { Object2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteOpenCustomHashMap$KeyIterator extends Object2ByteOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<K> {
    constructor(null_: Object2ByteOpenCustomHashMap$KeyIterator)
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: K) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): K;
    skip(arg0: number): number;
}