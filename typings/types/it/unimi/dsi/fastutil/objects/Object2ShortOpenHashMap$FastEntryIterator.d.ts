import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { Object2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortOpenHashMap$MapEntry.d.ts'
import type { Object2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortOpenHashMap$FastEntryIterator extends Object2ShortOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2ShortMap$Entry<K>> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Object2ShortOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2ShortMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2ShortOpenHashMap$MapEntry;
    skip(arg0: number): number;
}