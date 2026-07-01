import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { Object2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Object2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanOpenCustomHashMap$EntryIterator extends Object2BooleanOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2BooleanMap$Entry<K>> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Object2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2BooleanMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2BooleanOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}