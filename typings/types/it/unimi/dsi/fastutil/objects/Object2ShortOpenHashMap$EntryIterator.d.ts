import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { Object2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortOpenHashMap$MapEntry.d.ts'
import type { Object2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2ShortOpenHashMap$EntryIterator extends Object2ShortOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2ShortMap$Entry<K>> {
    private constructor(null_: Object2ShortOpenHashMap$EntryIterator)
    // private entry: Object2ShortOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2ShortMap$Entry<K>) => void, arg1: number): void;
    next(): Object2ShortOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}