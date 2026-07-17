import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2LongLinkedOpenHashMap$EntryIterator extends Float2LongLinkedOpenHashMap$MapIterator<(param0: Float2LongMap$Entry) => void> implements ObjectListIterator<Float2LongMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Float2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2LongMap$Entry) => void, arg1: number): void;
    add(arg0: Float2LongMap$Entry): void;
    next(): Float2LongLinkedOpenHashMap$MapEntry;
    previous(): Float2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Float2LongMap$Entry): void;
}