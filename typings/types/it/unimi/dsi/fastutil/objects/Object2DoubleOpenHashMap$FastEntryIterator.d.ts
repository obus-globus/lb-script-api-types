import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { Object2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleOpenHashMap$MapEntry.d.ts'
import type { Object2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleOpenHashMap$FastEntryIterator extends Object2DoubleOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2DoubleMap$Entry<K>> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Object2DoubleOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2DoubleMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2DoubleOpenHashMap$MapEntry;
    skip(arg0: number): number;
}