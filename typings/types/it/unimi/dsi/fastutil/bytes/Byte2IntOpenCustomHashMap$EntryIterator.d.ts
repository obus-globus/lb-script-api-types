import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { Byte2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2IntOpenCustomHashMap$EntryIterator extends Byte2IntOpenCustomHashMap$MapIterator<(param0: Byte2IntMap$Entry) => void> implements ObjectIterator<Byte2IntMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2IntMap$Entry) => void, arg1: number): void;
    next(): Byte2IntOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}