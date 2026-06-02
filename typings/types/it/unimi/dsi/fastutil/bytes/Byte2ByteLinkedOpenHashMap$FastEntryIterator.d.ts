import type { Byte2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ByteLinkedOpenHashMap$FastEntryIterator extends Byte2ByteLinkedOpenHashMap$MapIterator<(param0: Byte2ByteMap$Entry) => void> implements ObjectListIterator<Byte2ByteMap$Entry> {
    constructor(null_: Byte2ByteLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Byte2ByteLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Byte2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ByteMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ByteLinkedOpenHashMap$MapEntry;
    previous(): Byte2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}