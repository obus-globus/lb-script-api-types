import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2FloatLinkedOpenHashMap$EntryIterator extends Short2FloatLinkedOpenHashMap$MapIterator<(param0: Short2FloatMap$Entry) => void> implements ObjectListIterator<Short2FloatMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Short2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2FloatMap$Entry) => void, arg1: number): void;
    add(arg0: Short2FloatMap$Entry): void;
    next(): Short2FloatLinkedOpenHashMap$MapEntry;
    previous(): Short2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Short2FloatMap$Entry): void;
}