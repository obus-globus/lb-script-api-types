import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { Object2ShortOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ShortOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2ShortOpenCustomHashMap$EntryIterator extends Object2ShortOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2ShortMap$Entry<K>> {
    private constructor(null_: Object2ShortOpenCustomHashMap$EntryIterator)
    // private entry: Object2ShortOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2ShortMap$Entry<K>) => void, arg1: number): void;
    next(): Object2ShortOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}