import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2DoubleLinkedOpenHashMap$FastEntryIterator extends Short2DoubleLinkedOpenHashMap$MapIterator<(param0: Short2DoubleMap$Entry) => void> implements ObjectListIterator<Short2DoubleMap$Entry> {
    constructor(null_: Short2DoubleLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Short2DoubleLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Short2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2DoubleMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Short2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}