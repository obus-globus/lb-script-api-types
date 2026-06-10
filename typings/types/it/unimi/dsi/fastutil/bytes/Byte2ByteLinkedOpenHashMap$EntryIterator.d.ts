import type { Byte2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ByteLinkedOpenHashMap$EntryIterator extends Byte2ByteLinkedOpenHashMap$MapIterator<(param0: Byte2ByteMap$Entry) => void> implements ObjectListIterator<Byte2ByteMap$Entry> {
    constructor(null_: Byte2ByteLinkedOpenHashMap$EntryIterator)
    constructor(null_: Byte2ByteLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Byte2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ByteMap$Entry) => void, arg1: number): void;
    add(arg0: Byte2ByteMap$Entry): void;
    next(): Byte2ByteLinkedOpenHashMap$MapEntry;
    previous(): Byte2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Byte2ByteMap$Entry): void;
}