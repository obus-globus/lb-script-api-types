import type { Char2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceOpenHashMap$ValueIterator extends Char2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<V> {
    constructor(null_: Char2ReferenceOpenHashMap$ValueIterator)
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: V) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): V;
    skip(arg0: number): number;
}