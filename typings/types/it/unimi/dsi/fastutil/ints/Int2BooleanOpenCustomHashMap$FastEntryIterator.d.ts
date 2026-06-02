import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { Int2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Int2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2BooleanOpenCustomHashMap$FastEntryIterator extends Int2BooleanOpenCustomHashMap$MapIterator<(param0: Int2BooleanMap$Entry) => void> implements ObjectIterator<Int2BooleanMap$Entry> {
    private constructor(null_: Int2BooleanOpenCustomHashMap$FastEntryIterator)
    // private entry: Int2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2BooleanMap$Entry) => void, arg1: number): void;
    next(): Int2BooleanOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}