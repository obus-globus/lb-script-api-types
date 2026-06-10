import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { Object2DoubleOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleOpenCustomHashMap$MapEntry.d.ts'
import type { Object2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleOpenCustomHashMap$EntryIterator extends Object2DoubleOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2DoubleMap$Entry<K>> {
    private constructor(null_: Object2DoubleOpenCustomHashMap$EntryIterator)
    // private entry: Object2DoubleOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2DoubleMap$Entry<K>) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): Object2DoubleOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}