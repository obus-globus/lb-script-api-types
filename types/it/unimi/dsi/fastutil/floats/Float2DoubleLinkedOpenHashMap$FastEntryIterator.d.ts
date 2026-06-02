import type { Float2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2DoubleLinkedOpenHashMap$FastEntryIterator extends Float2DoubleLinkedOpenHashMap$MapIterator<(param0: Float2DoubleMap$Entry) => void> implements ObjectListIterator<Float2DoubleMap$Entry> {
    constructor(null_: Float2DoubleLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Float2DoubleLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Float2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2DoubleMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Float2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}