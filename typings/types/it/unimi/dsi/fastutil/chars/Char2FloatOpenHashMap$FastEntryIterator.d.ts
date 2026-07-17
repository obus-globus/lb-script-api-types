import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { Char2FloatOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatOpenHashMap$MapEntry.d.ts'
import type { Char2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2FloatOpenHashMap$FastEntryIterator extends Char2FloatOpenHashMap$MapIterator<(param0: Char2FloatMap$Entry) => void> implements ObjectIterator<Char2FloatMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Char2FloatOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2FloatMap$Entry) => void, arg1: number): void;
    next(): Char2FloatOpenHashMap$MapEntry;
    skip(arg0: number): number;
}