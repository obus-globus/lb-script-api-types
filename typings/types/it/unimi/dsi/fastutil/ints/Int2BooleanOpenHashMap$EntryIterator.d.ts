import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { Int2BooleanOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanOpenHashMap$MapEntry.d.ts'
import type { Int2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2BooleanOpenHashMap$EntryIterator extends Int2BooleanOpenHashMap$MapIterator<(param0: Int2BooleanMap$Entry) => void> implements ObjectIterator<Int2BooleanMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Int2BooleanOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2BooleanMap$Entry) => void, arg1: number): void;
    next(): Int2BooleanOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}