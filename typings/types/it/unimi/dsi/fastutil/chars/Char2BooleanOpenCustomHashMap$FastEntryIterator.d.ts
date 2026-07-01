import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { Char2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Char2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanOpenCustomHashMap$FastEntryIterator extends Char2BooleanOpenCustomHashMap$MapIterator<(param0: Char2BooleanMap$Entry) => void> implements ObjectIterator<Char2BooleanMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Char2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2BooleanMap$Entry) => void, arg1: number): void;
    next(): Char2BooleanOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}