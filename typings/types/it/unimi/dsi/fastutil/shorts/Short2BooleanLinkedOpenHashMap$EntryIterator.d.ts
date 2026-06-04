import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanLinkedOpenHashMap$EntryIterator extends Short2BooleanLinkedOpenHashMap$MapIterator<(param0: Short2BooleanMap$Entry) => void> implements ObjectListIterator<Short2BooleanMap$Entry> {
    constructor(null_: Short2BooleanLinkedOpenHashMap$EntryIterator)
    constructor(null_: Short2BooleanLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Short2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2BooleanMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Short2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}