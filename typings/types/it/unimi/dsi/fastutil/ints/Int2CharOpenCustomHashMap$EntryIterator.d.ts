import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { Int2CharOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharOpenCustomHashMap$MapEntry.d.ts'
import type { Int2CharOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2CharOpenCustomHashMap$EntryIterator extends Int2CharOpenCustomHashMap$MapIterator<(param0: Int2CharMap$Entry) => void> implements ObjectIterator<Int2CharMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Int2CharOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2CharMap$Entry) => void, arg1: number): void;
    next(): Int2CharOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}