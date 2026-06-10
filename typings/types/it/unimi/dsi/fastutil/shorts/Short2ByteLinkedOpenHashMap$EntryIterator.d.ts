import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2ByteLinkedOpenHashMap$EntryIterator extends Short2ByteLinkedOpenHashMap$MapIterator<(param0: Short2ByteMap$Entry) => void> implements ObjectListIterator<Short2ByteMap$Entry> {
    constructor(null_: Short2ByteLinkedOpenHashMap$EntryIterator)
    constructor(null_: Short2ByteLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Short2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2ByteMap$Entry) => void, arg1: number): void;
    add(arg0: Short2ByteMap$Entry): void;
    next(): Short2ByteLinkedOpenHashMap$MapEntry;
    previous(): Short2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Short2ByteMap$Entry): void;
}