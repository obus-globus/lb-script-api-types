import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { Char2IntOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntOpenHashMap$MapEntry.d.ts'
import type { Char2IntOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntOpenHashMap$FastEntryIterator extends Char2IntOpenHashMap$MapIterator<(param0: Char2IntMap$Entry) => void> implements ObjectIterator<Char2IntMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Char2IntOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2IntMap$Entry) => void, arg1: number): void;
    next(): Char2IntOpenHashMap$MapEntry;
    skip(arg0: number): number;
}