import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class MapEntrySerializer$MapEntry<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    constructor(key: K, value: V)
    readonly key: K;
    readonly value: V;
    component1(): K;
    component2(): V;
    copy(key: K, value: V): MapEntrySerializer$MapEntry<K, V>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}