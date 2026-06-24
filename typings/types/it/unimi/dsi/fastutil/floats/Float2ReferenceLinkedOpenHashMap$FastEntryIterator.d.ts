import type { Float2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceLinkedOpenHashMap$FastEntryIterator extends Float2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Float2ReferenceMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Float2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Float2ReferenceMap$Entry<V>) => void, arg1: number): void;
    add<V extends unknown>(arg0: Float2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Float2ReferenceLinkedOpenHashMap$MapEntry;
    previous<V extends unknown>(): Float2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends unknown>(arg0: Float2ReferenceMap$Entry<V>): void;
}