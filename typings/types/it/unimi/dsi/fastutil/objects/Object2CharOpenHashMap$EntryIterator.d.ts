import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { Object2CharOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharOpenHashMap$MapEntry.d.ts'
import type { Object2CharOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharOpenHashMap$EntryIterator extends Object2CharOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2CharMap$Entry<K>> {
    private constructor(null_: Object2CharOpenHashMap$EntryIterator)
    // private entry: Object2CharOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2CharMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2CharOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}