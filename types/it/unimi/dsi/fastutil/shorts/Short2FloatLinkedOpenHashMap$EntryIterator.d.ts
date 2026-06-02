import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2FloatLinkedOpenHashMap$EntryIterator extends Short2FloatLinkedOpenHashMap$MapIterator<(param0: Short2FloatMap$Entry) => void> implements ObjectListIterator<Short2FloatMap$Entry> {
    constructor(null_: Short2FloatLinkedOpenHashMap$EntryIterator)
    constructor(null_: Short2FloatLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Short2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2FloatMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2FloatLinkedOpenHashMap$MapEntry;
    previous(): Short2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}