import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { Int2FloatOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatOpenCustomHashMap$MapEntry.d.ts'
import type { Int2FloatOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2FloatOpenCustomHashMap$EntryIterator extends Int2FloatOpenCustomHashMap$MapIterator<(param0: Int2FloatMap$Entry) => void> implements ObjectIterator<Int2FloatMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Int2FloatOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2FloatMap$Entry) => void, arg1: number): void;
    next(): Int2FloatOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}