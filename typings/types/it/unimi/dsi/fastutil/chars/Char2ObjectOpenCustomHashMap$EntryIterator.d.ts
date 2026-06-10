import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { Char2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Char2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectOpenCustomHashMap$EntryIterator extends Char2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Char2ObjectMap$Entry<V>> {
    private constructor(null_: Char2ObjectOpenCustomHashMap$EntryIterator)
    // private entry: Char2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: Char2ObjectMap$Entry<V>) => void, arg1: number): void;
    next<V extends Object | number | string | boolean>(): Char2ObjectOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}