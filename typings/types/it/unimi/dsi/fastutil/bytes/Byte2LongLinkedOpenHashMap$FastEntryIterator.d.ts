import type { Byte2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2LongLinkedOpenHashMap$FastEntryIterator extends Byte2LongLinkedOpenHashMap$MapIterator<(param0: Byte2LongMap$Entry) => void> implements ObjectListIterator<Byte2LongMap$Entry> {
    constructor(null_: Byte2LongLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Byte2LongLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Byte2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2LongMap$Entry) => void, arg1: number): void;
    add(arg0: Byte2LongMap$Entry): void;
    next(): Byte2LongLinkedOpenHashMap$MapEntry;
    previous(): Byte2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Byte2LongMap$Entry): void;
}