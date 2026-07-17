import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2CharLinkedOpenHashMap$FastEntryIterator extends Byte2CharLinkedOpenHashMap$MapIterator<(param0: Byte2CharMap$Entry) => void> implements ObjectListIterator<Byte2CharMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Byte2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2CharMap$Entry) => void, arg1: number): void;
    add(arg0: Byte2CharMap$Entry): void;
    next(): Byte2CharLinkedOpenHashMap$MapEntry;
    previous(): Byte2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Byte2CharMap$Entry): void;
}