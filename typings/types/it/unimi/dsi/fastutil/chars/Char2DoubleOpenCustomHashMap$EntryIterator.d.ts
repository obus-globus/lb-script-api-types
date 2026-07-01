import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { Char2DoubleOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleOpenCustomHashMap$MapEntry.d.ts'
import type { Char2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2DoubleOpenCustomHashMap$EntryIterator extends Char2DoubleOpenCustomHashMap$MapIterator<(param0: Char2DoubleMap$Entry) => void> implements ObjectIterator<Char2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Char2DoubleOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2DoubleMap$Entry) => void, arg1: number): void;
    next(): Char2DoubleOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}