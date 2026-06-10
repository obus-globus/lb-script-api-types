import type { Double2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2ByteLinkedOpenHashMap$FastEntryIterator extends Double2ByteLinkedOpenHashMap$MapIterator<(param0: Double2ByteMap$Entry) => void> implements ObjectListIterator<Double2ByteMap$Entry> {
    constructor(null_: Double2ByteLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Double2ByteLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Double2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2ByteMap$Entry) => void, arg1: number): void;
    add(arg0: Double2ByteMap$Entry): void;
    next(): Double2ByteLinkedOpenHashMap$MapEntry;
    previous(): Double2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Double2ByteMap$Entry): void;
}