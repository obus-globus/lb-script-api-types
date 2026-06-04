import type { Byte2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceLinkedOpenHashMap$EntryIterator extends Byte2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Byte2ReferenceMap$Entry<V>> {
    constructor(null_: Byte2ReferenceLinkedOpenHashMap$EntryIterator)
    constructor(null_: Byte2ReferenceLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Byte2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ReferenceMap$Entry<V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ReferenceLinkedOpenHashMap$MapEntry;
    previous(): Byte2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}