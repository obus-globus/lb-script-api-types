import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { Object2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Object2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceOpenHashMap$FastEntryIterator extends Object2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Object2ReferenceMap$Entry<K, V>> {
    private constructor(null_: JavaMap<Object, Object>)
    // private entry: Object2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown, V extends unknown>(arg0: (param0: Object2ReferenceMap$Entry<K, V>) => void, arg1: number): void;
    next<K extends unknown, V extends unknown>(): Object2ReferenceOpenHashMap$MapEntry;
    skip(arg0: number): number;
}