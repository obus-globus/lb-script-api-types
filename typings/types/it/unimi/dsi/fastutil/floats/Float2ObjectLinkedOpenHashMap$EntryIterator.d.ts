import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Float2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectLinkedOpenHashMap$EntryIterator extends Float2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Float2ObjectMap$Entry<V>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entry: Float2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Float2ObjectMap$Entry<V>) => void, arg1: number): void;
    add<V extends unknown>(arg0: Float2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Float2ObjectLinkedOpenHashMap$MapEntry;
    previous<V extends unknown>(): Float2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends unknown>(arg0: Float2ObjectMap$Entry<V>): void;
}