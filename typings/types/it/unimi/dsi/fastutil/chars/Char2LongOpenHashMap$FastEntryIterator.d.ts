import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
import type { Char2LongOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongOpenHashMap$MapEntry.d.ts'
import type { Char2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2LongOpenHashMap$FastEntryIterator extends Char2LongOpenHashMap$MapIterator<(param0: Char2LongMap$Entry) => void> implements ObjectIterator<Char2LongMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Char2LongOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2LongMap$Entry) => void, arg1: number): void;
    next(): Char2LongOpenHashMap$MapEntry;
    skip(arg0: number): number;
}