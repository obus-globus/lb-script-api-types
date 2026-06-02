import type { Byte2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortLinkedOpenHashMap$EntryIterator extends Byte2ShortLinkedOpenHashMap$MapIterator<(param0: Byte2ShortMap$Entry) => void> implements ObjectListIterator<Byte2ShortMap$Entry> {
    constructor(null_: Byte2ShortLinkedOpenHashMap$EntryIterator)
    constructor(null_: Byte2ShortLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Byte2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ShortMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ShortLinkedOpenHashMap$MapEntry;
    previous(): Byte2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}