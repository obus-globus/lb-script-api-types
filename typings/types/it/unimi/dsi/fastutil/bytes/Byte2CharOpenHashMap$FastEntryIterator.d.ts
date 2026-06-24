import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { Byte2CharOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharOpenHashMap$MapEntry.d.ts'
import type { Byte2CharOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2CharOpenHashMap$FastEntryIterator extends Byte2CharOpenHashMap$MapIterator<(param0: Byte2CharMap$Entry) => void> implements ObjectIterator<Byte2CharMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2CharOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2CharMap$Entry) => void, arg1: number): void;
    next(): Byte2CharOpenHashMap$MapEntry;
    skip(arg0: number): number;
}