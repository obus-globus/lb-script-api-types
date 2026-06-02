import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { Byte2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2BooleanOpenCustomHashMap$FastEntryIterator extends Byte2BooleanOpenCustomHashMap$MapIterator<(param0: Byte2BooleanMap$Entry) => void> implements ObjectIterator<Byte2BooleanMap$Entry> {
    private constructor(null_: Byte2BooleanOpenCustomHashMap$FastEntryIterator)
    // private entry: Byte2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2BooleanMap$Entry) => void, arg1: number): void;
    next(): Byte2BooleanOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}