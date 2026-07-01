import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { Byte2DoubleOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2DoubleOpenCustomHashMap$FastEntryIterator extends Byte2DoubleOpenCustomHashMap$MapIterator<(param0: Byte2DoubleMap$Entry) => void> implements ObjectIterator<Byte2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2DoubleOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2DoubleMap$Entry) => void, arg1: number): void;
    next(): Byte2DoubleOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}