import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { Char2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleOpenHashMap$MapEntry.d.ts'
import type { Char2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2DoubleOpenHashMap$FastEntryIterator extends Char2DoubleOpenHashMap$MapIterator<(param0: Char2DoubleMap$Entry) => void> implements ObjectIterator<Char2DoubleMap$Entry> {
    private constructor(null_: Char2DoubleOpenHashMap$FastEntryIterator)
    // private entry: Char2DoubleOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2DoubleMap$Entry) => void, arg1: number): void;
    next(): Char2DoubleOpenHashMap$MapEntry;
    skip(arg0: number): number;
}