import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2IntLinkedOpenHashMap$EntryIterator extends Short2IntLinkedOpenHashMap$MapIterator<(param0: Short2IntMap$Entry) => void> implements ObjectListIterator<Short2IntMap$Entry> {
    constructor(null_: Short2IntLinkedOpenHashMap$EntryIterator)
    constructor(null_: Short2IntLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Short2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2IntMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2IntLinkedOpenHashMap$MapEntry;
    previous(): Short2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}