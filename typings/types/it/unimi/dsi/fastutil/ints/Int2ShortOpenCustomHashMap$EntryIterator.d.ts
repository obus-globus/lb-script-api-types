import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { Int2ShortOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortOpenCustomHashMap$MapEntry.d.ts'
import type { Int2ShortOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ShortOpenCustomHashMap$EntryIterator extends Int2ShortOpenCustomHashMap$MapIterator<(param0: Int2ShortMap$Entry) => void> implements ObjectIterator<Int2ShortMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Int2ShortOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2ShortMap$Entry) => void, arg1: number): void;
    next(): Int2ShortOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}