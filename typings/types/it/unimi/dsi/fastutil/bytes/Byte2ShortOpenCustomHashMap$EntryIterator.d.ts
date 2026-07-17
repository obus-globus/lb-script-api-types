import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { Byte2ShortOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2ShortOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ShortOpenCustomHashMap$EntryIterator extends Byte2ShortOpenCustomHashMap$MapIterator<(param0: Byte2ShortMap$Entry) => void> implements ObjectIterator<Byte2ShortMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Byte2ShortOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ShortMap$Entry) => void, arg1: number): void;
    next(): Byte2ShortOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}