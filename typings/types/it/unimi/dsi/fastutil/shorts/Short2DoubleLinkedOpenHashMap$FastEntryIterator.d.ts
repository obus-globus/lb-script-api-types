import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2DoubleLinkedOpenHashMap$FastEntryIterator extends Short2DoubleLinkedOpenHashMap$MapIterator<(param0: Short2DoubleMap$Entry) => void> implements ObjectListIterator<Short2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Short2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2DoubleMap$Entry) => void, arg1: number): void;
    add(arg0: Short2DoubleMap$Entry): void;
    next(): Short2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Short2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Short2DoubleMap$Entry): void;
}