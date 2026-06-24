import type { Float2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2ShortLinkedOpenHashMap$FastEntryIterator extends Float2ShortLinkedOpenHashMap$MapIterator<(param0: Float2ShortMap$Entry) => void> implements ObjectListIterator<Float2ShortMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Float2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2ShortMap$Entry) => void, arg1: number): void;
    add(arg0: Float2ShortMap$Entry): void;
    next(): Float2ShortLinkedOpenHashMap$MapEntry;
    previous(): Float2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Float2ShortMap$Entry): void;
}