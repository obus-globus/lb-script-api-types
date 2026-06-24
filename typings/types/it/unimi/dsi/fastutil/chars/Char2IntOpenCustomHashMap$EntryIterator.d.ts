import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { Char2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Char2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntOpenCustomHashMap$EntryIterator extends Char2IntOpenCustomHashMap$MapIterator<(param0: Char2IntMap$Entry) => void> implements ObjectIterator<Char2IntMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Char2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2IntMap$Entry) => void, arg1: number): void;
    next(): Char2IntOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}