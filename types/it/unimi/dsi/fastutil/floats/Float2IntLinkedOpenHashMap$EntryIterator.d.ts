import type { Float2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2IntLinkedOpenHashMap$EntryIterator extends Float2IntLinkedOpenHashMap$MapIterator<(param0: Float2IntMap$Entry) => void> implements ObjectListIterator<Float2IntMap$Entry> {
    constructor(null_: Float2IntLinkedOpenHashMap$EntryIterator)
    constructor(null_: Float2IntLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Float2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2IntMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2IntLinkedOpenHashMap$MapEntry;
    previous(): Float2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}