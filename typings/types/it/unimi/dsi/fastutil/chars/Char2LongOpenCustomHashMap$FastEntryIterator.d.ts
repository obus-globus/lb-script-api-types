import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
import type { Char2LongOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongOpenCustomHashMap$MapEntry.d.ts'
import type { Char2LongOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2LongOpenCustomHashMap$FastEntryIterator extends Char2LongOpenCustomHashMap$MapIterator<(param0: Char2LongMap$Entry) => void> implements ObjectIterator<Char2LongMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Char2LongOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2LongMap$Entry) => void, arg1: number): void;
    next(): Char2LongOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}