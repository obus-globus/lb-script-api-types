import type { Float2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2FloatLinkedOpenHashMap$EntryIterator extends Float2FloatLinkedOpenHashMap$MapIterator<(param0: Float2FloatMap$Entry) => void> implements ObjectListIterator<Float2FloatMap$Entry> {
    constructor(null_: Float2FloatLinkedOpenHashMap$EntryIterator)
    constructor(null_: Float2FloatLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Float2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2FloatMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2FloatLinkedOpenHashMap$MapEntry;
    previous(): Float2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}