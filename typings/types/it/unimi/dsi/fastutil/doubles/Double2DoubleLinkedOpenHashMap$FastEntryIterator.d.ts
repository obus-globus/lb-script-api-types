import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2DoubleLinkedOpenHashMap$FastEntryIterator extends Double2DoubleLinkedOpenHashMap$MapIterator<(param0: Double2DoubleMap$Entry) => void> implements ObjectListIterator<Double2DoubleMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Double2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2DoubleMap$Entry) => void, arg1: number): void;
    add(arg0: Double2DoubleMap$Entry): void;
    next(): Double2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Double2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Double2DoubleMap$Entry): void;
}