import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { Object2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleOpenHashMap$MapEntry.d.ts'
import type { Object2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2DoubleOpenHashMap$FastEntryIterator extends Object2DoubleOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2DoubleMap$Entry<K>> {
    private constructor(null_: Object2DoubleOpenHashMap$FastEntryIterator)
    // private entry: Object2DoubleOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2DoubleMap$Entry<K>) => void, arg1: number): void;
    next(): Object2DoubleOpenHashMap$MapEntry;
    skip(arg0: number): number;
}