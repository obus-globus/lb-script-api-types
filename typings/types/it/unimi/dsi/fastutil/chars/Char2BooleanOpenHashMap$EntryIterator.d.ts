import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { Char2BooleanOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanOpenHashMap$MapEntry.d.ts'
import type { Char2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2BooleanOpenHashMap$EntryIterator extends Char2BooleanOpenHashMap$MapIterator<(param0: Char2BooleanMap$Entry) => void> implements ObjectIterator<Char2BooleanMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Char2BooleanOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2BooleanMap$Entry) => void, arg1: number): void;
    next(): Char2BooleanOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}