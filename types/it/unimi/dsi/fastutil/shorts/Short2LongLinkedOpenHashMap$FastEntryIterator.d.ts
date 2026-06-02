import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2LongLinkedOpenHashMap$FastEntryIterator extends Short2LongLinkedOpenHashMap$MapIterator<(param0: Short2LongMap$Entry) => void> implements ObjectListIterator<Short2LongMap$Entry> {
    constructor(null_: Short2LongLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Short2LongLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Short2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2LongMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2LongLinkedOpenHashMap$MapEntry;
    previous(): Short2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}