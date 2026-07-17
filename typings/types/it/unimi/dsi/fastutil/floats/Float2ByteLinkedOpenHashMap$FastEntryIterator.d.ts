import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2ByteLinkedOpenHashMap$FastEntryIterator extends Float2ByteLinkedOpenHashMap$MapIterator<(param0: Float2ByteMap$Entry) => void> implements ObjectListIterator<Float2ByteMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Float2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2ByteMap$Entry) => void, arg1: number): void;
    add(arg0: Float2ByteMap$Entry): void;
    next(): Float2ByteLinkedOpenHashMap$MapEntry;
    previous(): Float2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Float2ByteMap$Entry): void;
}