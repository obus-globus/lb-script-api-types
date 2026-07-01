import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { Byte2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleOpenHashMap$MapEntry.d.ts'
import type { Byte2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2DoubleOpenHashMap$FastEntryIterator extends Byte2DoubleOpenHashMap$MapIterator<(param0: Byte2DoubleMap$Entry) => void> implements ObjectIterator<Byte2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2DoubleOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2DoubleMap$Entry) => void, arg1: number): void;
    next(): Byte2DoubleOpenHashMap$MapEntry;
    skip(arg0: number): number;
}