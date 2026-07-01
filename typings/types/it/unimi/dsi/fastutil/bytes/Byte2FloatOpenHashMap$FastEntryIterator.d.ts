import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { Byte2FloatOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatOpenHashMap$MapEntry.d.ts'
import type { Byte2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2FloatOpenHashMap$FastEntryIterator extends Byte2FloatOpenHashMap$MapIterator<(param0: Byte2FloatMap$Entry) => void> implements ObjectIterator<Byte2FloatMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2FloatOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2FloatMap$Entry) => void, arg1: number): void;
    next(): Byte2FloatOpenHashMap$MapEntry;
    skip(arg0: number): number;
}