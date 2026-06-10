import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { Object2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Object2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanOpenCustomHashMap$FastEntryIterator extends Object2BooleanOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2BooleanMap$Entry<K>> {
    private constructor(null_: Object2BooleanOpenCustomHashMap$FastEntryIterator)
    // private entry: Object2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2BooleanMap$Entry<K>) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): Object2BooleanOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}