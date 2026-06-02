import type { Float2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2CharLinkedOpenHashMap$EntryIterator extends Float2CharLinkedOpenHashMap$MapIterator<(param0: Float2CharMap$Entry) => void> implements ObjectListIterator<Float2CharMap$Entry> {
    constructor(null_: Float2CharLinkedOpenHashMap$EntryIterator)
    constructor(null_: Float2CharLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Float2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2CharMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2CharLinkedOpenHashMap$MapEntry;
    previous(): Float2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}