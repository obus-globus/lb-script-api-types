import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { Byte2CharOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2CharOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2CharOpenCustomHashMap$EntryIterator extends Byte2CharOpenCustomHashMap$MapIterator<(param0: Byte2CharMap$Entry) => void> implements ObjectIterator<Byte2CharMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Byte2CharOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2CharMap$Entry) => void, arg1: number): void;
    next(): Byte2CharOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}