import type { Byte2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2IntLinkedOpenHashMap$FastEntryIterator extends Byte2IntLinkedOpenHashMap$MapIterator<(param0: Byte2IntMap$Entry) => void> implements ObjectListIterator<Byte2IntMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Byte2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2IntMap$Entry) => void, arg1: number): void;
    add(arg0: Byte2IntMap$Entry): void;
    next(): Byte2IntLinkedOpenHashMap$MapEntry;
    previous(): Byte2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Byte2IntMap$Entry): void;
}