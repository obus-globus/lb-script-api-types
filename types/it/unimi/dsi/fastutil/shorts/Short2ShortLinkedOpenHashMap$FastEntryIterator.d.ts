import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ShortLinkedOpenHashMap$FastEntryIterator extends Short2ShortLinkedOpenHashMap$MapIterator<(param0: Short2ShortMap$Entry) => void> implements ObjectListIterator<Short2ShortMap$Entry> {
    constructor(null_: Short2ShortLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Short2ShortLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Short2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2ShortMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2ShortLinkedOpenHashMap$MapEntry;
    previous(): Short2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}