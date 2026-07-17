import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2LongLinkedOpenHashMap$EntryIterator extends Short2LongLinkedOpenHashMap$MapIterator<(param0: Short2LongMap$Entry) => void> implements ObjectListIterator<Short2LongMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Short2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2LongMap$Entry) => void, arg1: number): void;
    add(arg0: Short2LongMap$Entry): void;
    next(): Short2LongLinkedOpenHashMap$MapEntry;
    previous(): Short2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Short2LongMap$Entry): void;
}