import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ShortLinkedOpenHashMap$FastEntryIterator extends Byte2ShortLinkedOpenHashMap$MapIterator<(param0: Byte2ShortMap$Entry) => void> implements ObjectListIterator<Byte2ShortMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Byte2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ShortMap$Entry) => void, arg1: number): void;
    add(arg0: Byte2ShortMap$Entry): void;
    next(): Byte2ShortLinkedOpenHashMap$MapEntry;
    previous(): Byte2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Byte2ShortMap$Entry): void;
}