import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { Byte2FloatOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2FloatOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2FloatOpenCustomHashMap$EntryIterator extends Byte2FloatOpenCustomHashMap$MapIterator<(param0: Byte2FloatMap$Entry) => void> implements ObjectIterator<Byte2FloatMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Byte2FloatOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2FloatMap$Entry) => void, arg1: number): void;
    next(): Byte2FloatOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}