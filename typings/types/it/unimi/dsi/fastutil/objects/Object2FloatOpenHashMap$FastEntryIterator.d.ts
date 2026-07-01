import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { Object2FloatOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatOpenHashMap$MapEntry.d.ts'
import type { Object2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatOpenHashMap$FastEntryIterator extends Object2FloatOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2FloatMap$Entry<K>> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Object2FloatOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2FloatMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2FloatOpenHashMap$MapEntry;
    skip(arg0: number): number;
}