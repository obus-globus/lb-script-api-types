import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { Byte2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2IntOpenCustomHashMap$FastEntryIterator extends Byte2IntOpenCustomHashMap$MapIterator<(param0: Byte2IntMap$Entry) => void> implements ObjectIterator<Byte2IntMap$Entry> {
    private constructor(null_: Byte2IntOpenCustomHashMap$FastEntryIterator)
    // private entry: Byte2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2IntMap$Entry) => void, arg1: number): void;
    next(): Byte2IntOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}