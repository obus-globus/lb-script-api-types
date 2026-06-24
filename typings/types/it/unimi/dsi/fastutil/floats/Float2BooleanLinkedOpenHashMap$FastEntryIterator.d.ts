import type { Float2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2BooleanLinkedOpenHashMap$FastEntryIterator extends Float2BooleanLinkedOpenHashMap$MapIterator<(param0: Float2BooleanMap$Entry) => void> implements ObjectListIterator<Float2BooleanMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Float2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2BooleanMap$Entry) => void, arg1: number): void;
    add(arg0: Float2BooleanMap$Entry): void;
    next(): Float2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Float2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Float2BooleanMap$Entry): void;
}