import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { Char2CharOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharOpenCustomHashMap$MapEntry.d.ts'
import type { Char2CharOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2CharOpenCustomHashMap$EntryIterator extends Char2CharOpenCustomHashMap$MapIterator<(param0: Char2CharMap$Entry) => void> implements ObjectIterator<Char2CharMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Char2CharOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2CharMap$Entry) => void, arg1: number): void;
    next(): Char2CharOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}