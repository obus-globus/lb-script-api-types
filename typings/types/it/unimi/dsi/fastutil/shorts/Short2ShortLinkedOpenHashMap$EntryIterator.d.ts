import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2ShortLinkedOpenHashMap$EntryIterator extends Short2ShortLinkedOpenHashMap$MapIterator<(param0: Short2ShortMap$Entry) => void> implements ObjectListIterator<Short2ShortMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Short2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2ShortMap$Entry) => void, arg1: number): void;
    add(arg0: Short2ShortMap$Entry): void;
    next(): Short2ShortLinkedOpenHashMap$MapEntry;
    previous(): Short2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Short2ShortMap$Entry): void;
}