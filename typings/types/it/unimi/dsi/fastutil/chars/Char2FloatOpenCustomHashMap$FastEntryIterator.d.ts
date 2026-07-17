import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { Char2FloatOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatOpenCustomHashMap$MapEntry.d.ts'
import type { Char2FloatOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2FloatOpenCustomHashMap$FastEntryIterator extends Char2FloatOpenCustomHashMap$MapIterator<(param0: Char2FloatMap$Entry) => void> implements ObjectIterator<Char2FloatMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Char2FloatOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2FloatMap$Entry) => void, arg1: number): void;
    next(): Char2FloatOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}