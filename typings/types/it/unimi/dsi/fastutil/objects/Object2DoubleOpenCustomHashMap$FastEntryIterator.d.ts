import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { Object2DoubleOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleOpenCustomHashMap$MapEntry.d.ts'
import type { Object2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleOpenCustomHashMap$FastEntryIterator extends Object2DoubleOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2DoubleMap$Entry<K>> {
    private constructor(null_: Object2DoubleOpenCustomHashMap$FastEntryIterator)
    // private entry: Object2DoubleOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2DoubleMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2DoubleOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}