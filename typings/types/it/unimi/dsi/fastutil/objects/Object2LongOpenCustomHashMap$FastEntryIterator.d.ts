import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { Object2LongOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongOpenCustomHashMap$MapEntry.d.ts'
import type { Object2LongOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2LongOpenCustomHashMap$FastEntryIterator extends Object2LongOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2LongMap$Entry<K>> {
    private constructor(null_: Object2LongOpenCustomHashMap$FastEntryIterator)
    // private entry: Object2LongOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2LongMap$Entry<K>) => void, arg1: number): void;
    next(): Object2LongOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}