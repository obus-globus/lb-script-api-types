import type { Byte2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2CharLinkedOpenHashMap$EntryIterator extends Byte2CharLinkedOpenHashMap$MapIterator<(param0: Byte2CharMap$Entry) => void> implements ObjectListIterator<Byte2CharMap$Entry> {
    constructor(null_: Byte2CharLinkedOpenHashMap$EntryIterator)
    constructor(null_: Byte2CharLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Byte2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2CharMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2CharLinkedOpenHashMap$MapEntry;
    previous(): Byte2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}