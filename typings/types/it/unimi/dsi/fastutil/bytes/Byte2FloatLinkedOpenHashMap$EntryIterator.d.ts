import type { Byte2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2FloatLinkedOpenHashMap$EntryIterator extends Byte2FloatLinkedOpenHashMap$MapIterator<(param0: Byte2FloatMap$Entry) => void> implements ObjectListIterator<Byte2FloatMap$Entry> {
    constructor(null_: Byte2FloatLinkedOpenHashMap$EntryIterator)
    constructor(null_: Byte2FloatLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Byte2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2FloatMap$Entry) => void, arg1: number): void;
    add(arg0: Byte2FloatMap$Entry): void;
    next(): Byte2FloatLinkedOpenHashMap$MapEntry;
    previous(): Byte2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Byte2FloatMap$Entry): void;
}