import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharLinkedOpenHashMap$FastEntryIterator extends Short2CharLinkedOpenHashMap$MapIterator<(param0: Short2CharMap$Entry) => void> implements ObjectListIterator<Short2CharMap$Entry> {
    constructor(null_: Short2CharLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Short2CharLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Short2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2CharMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2CharLinkedOpenHashMap$MapEntry;
    previous(): Short2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}