import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { Byte2BooleanOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanOpenHashMap$MapEntry.d.ts'
import type { Byte2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2BooleanOpenHashMap$FastEntryIterator extends Byte2BooleanOpenHashMap$MapIterator<(param0: Byte2BooleanMap$Entry) => void> implements ObjectIterator<Byte2BooleanMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2BooleanOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2BooleanMap$Entry) => void, arg1: number): void;
    next(): Byte2BooleanOpenHashMap$MapEntry;
    skip(arg0: number): number;
}