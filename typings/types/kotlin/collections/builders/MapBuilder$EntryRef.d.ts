import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class MapBuilder$EntryRef<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    constructor(map: JavaMap<K, V>, index: number)
    // private expectedModCount: number;
    // private index: number;
    readonly key: K;
    // private map: JavaMap<K, V>;
    readonly value: V;
    // private checkForComodification(): void;
    equals(other: Object | null): boolean;
    hashCode(): number;
    setValue(newValue: V): V;
    toString(): string;
}