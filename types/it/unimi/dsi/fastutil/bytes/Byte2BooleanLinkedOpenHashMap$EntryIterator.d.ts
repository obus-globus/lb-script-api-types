import type { Byte2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2BooleanLinkedOpenHashMap$EntryIterator extends Byte2BooleanLinkedOpenHashMap$MapIterator<(param0: Byte2BooleanMap$Entry) => void> implements ObjectListIterator<Byte2BooleanMap$Entry> {
    constructor(null_: Byte2BooleanLinkedOpenHashMap$EntryIterator)
    constructor(null_: Byte2BooleanLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Byte2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2BooleanMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Byte2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}