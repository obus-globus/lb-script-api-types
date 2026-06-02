import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { Byte2CharOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2CharOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2CharOpenCustomHashMap$FastEntryIterator extends Byte2CharOpenCustomHashMap$MapIterator<(param0: Byte2CharMap$Entry) => void> implements ObjectIterator<Byte2CharMap$Entry> {
    private constructor(null_: Byte2CharOpenCustomHashMap$FastEntryIterator)
    // private entry: Byte2CharOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2CharMap$Entry) => void, arg1: number): void;
    next(): Byte2CharOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}