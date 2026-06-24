import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { Byte2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortOpenHashMap$MapEntry.d.ts'
import type { Byte2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortOpenHashMap$FastEntryIterator extends Byte2ShortOpenHashMap$MapIterator<(param0: Byte2ShortMap$Entry) => void> implements ObjectIterator<Byte2ShortMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2ShortOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ShortMap$Entry) => void, arg1: number): void;
    next(): Byte2ShortOpenHashMap$MapEntry;
    skip(arg0: number): number;
}