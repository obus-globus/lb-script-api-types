import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractMapEntry } from '../../../../com/google/common/collect/AbstractMapEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompactHashMap$MapEntry extends AbstractMapEntry<K, V> {
    constructor(null_: JavaMap<Object, Object>, index: number)
    readonly key: K;
    readonly key: K;
    // private lastKnownIndex: number;
    readonly value: V;
    setValue<V extends unknown>(value: V): V;
    // private updateLastKnownIndex(): void;
}