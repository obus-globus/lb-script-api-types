import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { Char2ShortOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortOpenCustomHashMap$MapEntry.d.ts'
import type { Char2ShortOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ShortOpenCustomHashMap$EntryIterator extends Char2ShortOpenCustomHashMap$MapIterator<(param0: Char2ShortMap$Entry) => void> implements ObjectIterator<Char2ShortMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Char2ShortOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2ShortMap$Entry) => void, arg1: number): void;
    next(): Char2ShortOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}