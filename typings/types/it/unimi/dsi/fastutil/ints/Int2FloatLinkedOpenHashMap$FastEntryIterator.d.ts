import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2FloatLinkedOpenHashMap$FastEntryIterator extends Int2FloatLinkedOpenHashMap$MapIterator<(param0: Int2FloatMap$Entry) => void> implements ObjectListIterator<Int2FloatMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Int2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2FloatMap$Entry) => void, arg1: number): void;
    add(arg0: Int2FloatMap$Entry): void;
    next(): Int2FloatLinkedOpenHashMap$MapEntry;
    previous(): Int2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Int2FloatMap$Entry): void;
}