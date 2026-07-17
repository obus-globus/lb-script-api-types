import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { Object2LongOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongOpenHashMap$MapEntry.d.ts'
import type { Object2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongOpenHashMap$EntryIterator extends Object2LongOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2LongMap$Entry<K>> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Object2LongOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2LongMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2LongOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}