import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { Byte2IntOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntOpenHashMap$MapEntry.d.ts'
import type { Byte2IntOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2IntOpenHashMap$EntryIterator extends Byte2IntOpenHashMap$MapIterator<(param0: Byte2IntMap$Entry) => void> implements ObjectIterator<Byte2IntMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2IntOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2IntMap$Entry) => void, arg1: number): void;
    next(): Byte2IntOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}