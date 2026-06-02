import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { Char2ObjectOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectOpenHashMap$MapEntry.d.ts'
import type { Char2ObjectOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2ObjectOpenHashMap$FastEntryIterator extends Char2ObjectOpenHashMap$MapIterator<Object> implements ObjectIterator<Char2ObjectMap$Entry<V>> {
    private constructor(null_: Char2ObjectOpenHashMap$FastEntryIterator)
    // private entry: Char2ObjectOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2ObjectMap$Entry<V>) => void, arg1: number): void;
    next(): Char2ObjectOpenHashMap$MapEntry;
    skip(arg0: number): number;
}