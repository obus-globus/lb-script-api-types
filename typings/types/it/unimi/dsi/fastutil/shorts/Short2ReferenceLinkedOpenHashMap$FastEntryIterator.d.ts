import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceLinkedOpenHashMap$FastEntryIterator extends Short2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Short2ReferenceMap$Entry<V>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Short2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Short2ReferenceMap$Entry<V>) => void, arg1: number): void;
    add<V extends unknown>(arg0: Short2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Short2ReferenceLinkedOpenHashMap$MapEntry;
    previous<V extends unknown>(): Short2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends unknown>(arg0: Short2ReferenceMap$Entry<V>): void;
}