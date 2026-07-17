import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { Object2FloatOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatOpenCustomHashMap$MapEntry.d.ts'
import type { Object2FloatOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatOpenCustomHashMap$EntryIterator extends Object2FloatOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2FloatMap$Entry<K>> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Object2FloatOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2FloatMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2FloatOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}