import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2DoubleLinkedOpenHashMap$EntryIterator extends Byte2DoubleLinkedOpenHashMap$MapIterator<(param0: Byte2DoubleMap$Entry) => void> implements ObjectListIterator<Byte2DoubleMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Byte2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2DoubleMap$Entry) => void, arg1: number): void;
    add(arg0: Byte2DoubleMap$Entry): void;
    next(): Byte2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Byte2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Byte2DoubleMap$Entry): void;
}