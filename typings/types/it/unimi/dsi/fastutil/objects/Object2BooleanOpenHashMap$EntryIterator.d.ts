import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { Object2BooleanOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanOpenHashMap$MapEntry.d.ts'
import type { Object2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanOpenHashMap$EntryIterator extends Object2BooleanOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2BooleanMap$Entry<K>> {
    private constructor(null_: { [key: string]: any })
    // private entry: Object2BooleanOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2BooleanMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2BooleanOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}