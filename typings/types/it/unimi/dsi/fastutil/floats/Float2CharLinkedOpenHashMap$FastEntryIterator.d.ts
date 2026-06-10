import type { Float2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2CharLinkedOpenHashMap$FastEntryIterator extends Float2CharLinkedOpenHashMap$MapIterator<(param0: Float2CharMap$Entry) => void> implements ObjectListIterator<Float2CharMap$Entry> {
    constructor(null_: Float2CharLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Float2CharLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Float2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2CharMap$Entry) => void, arg1: number): void;
    add(arg0: Float2CharMap$Entry): void;
    next(): Float2CharLinkedOpenHashMap$MapEntry;
    previous(): Float2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Float2CharMap$Entry): void;
}