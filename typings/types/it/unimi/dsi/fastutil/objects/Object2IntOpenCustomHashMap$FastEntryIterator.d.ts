import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { Object2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Object2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntOpenCustomHashMap$FastEntryIterator extends Object2IntOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2IntMap$Entry<K>> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Object2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2IntMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2IntOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}