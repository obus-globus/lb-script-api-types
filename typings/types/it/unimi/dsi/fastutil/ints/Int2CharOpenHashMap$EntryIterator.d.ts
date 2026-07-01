import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { Int2CharOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharOpenHashMap$MapEntry.d.ts'
import type { Int2CharOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharOpenHashMap$EntryIterator extends Int2CharOpenHashMap$MapIterator<(param0: Int2CharMap$Entry) => void> implements ObjectIterator<Int2CharMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Int2CharOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2CharMap$Entry) => void, arg1: number): void;
    next(): Int2CharOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}