import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { Int2CharOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharOpenHashMap$MapEntry.d.ts'
import type { Int2CharOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2CharOpenHashMap$FastEntryIterator extends Int2CharOpenHashMap$MapIterator<(param0: Int2CharMap$Entry) => void> implements ObjectIterator<Int2CharMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Int2CharOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2CharMap$Entry) => void, arg1: number): void;
    next(): Int2CharOpenHashMap$MapEntry;
    skip(arg0: number): number;
}