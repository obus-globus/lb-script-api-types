import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { Char2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortOpenHashMap$MapEntry.d.ts'
import type { Char2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ShortOpenHashMap$FastEntryIterator extends Char2ShortOpenHashMap$MapIterator<(param0: Char2ShortMap$Entry) => void> implements ObjectIterator<Char2ShortMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Char2ShortOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2ShortMap$Entry) => void, arg1: number): void;
    next(): Char2ShortOpenHashMap$MapEntry;
    skip(arg0: number): number;
}