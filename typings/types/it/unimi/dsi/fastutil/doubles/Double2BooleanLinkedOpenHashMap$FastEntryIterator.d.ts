import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Double2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2BooleanLinkedOpenHashMap$FastEntryIterator extends Double2BooleanLinkedOpenHashMap$MapIterator<(param0: Double2BooleanMap$Entry) => void> implements ObjectListIterator<Double2BooleanMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Double2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Double2BooleanMap$Entry) => void, arg1: number): void;
    add(arg0: Double2BooleanMap$Entry): void;
    next(): Double2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Double2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Double2BooleanMap$Entry): void;
}