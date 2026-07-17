import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2IntLinkedOpenHashMap$EntryIterator extends Float2IntLinkedOpenHashMap$MapIterator<(param0: Float2IntMap$Entry) => void> implements ObjectListIterator<Float2IntMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Float2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2IntMap$Entry) => void, arg1: number): void;
    add(arg0: Float2IntMap$Entry): void;
    next(): Float2IntLinkedOpenHashMap$MapEntry;
    previous(): Float2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Float2IntMap$Entry): void;
}