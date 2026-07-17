import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class DefaultHeaders$HeaderEntry<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    constructor()
    constructor(arg0: number, arg1: K)
    constructor(arg0: number, arg1: K, arg2: V, arg3: DefaultHeaders$HeaderEntry<K, V>, arg4: DefaultHeaders$HeaderEntry<K, V>)
    // private after: DefaultHeaders$HeaderEntry<K, V>;
    // private before: DefaultHeaders$HeaderEntry<K, V>;
    // private hash: number;
    readonly key: K;
    readonly key: K;
    // private next: DefaultHeaders$HeaderEntry<K, V>;
    value: V;
    readonly value: V;
    after(): DefaultHeaders$HeaderEntry<K, V>;
    before(): DefaultHeaders$HeaderEntry<K, V>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    pointNeighborsToThis(): void;
    remove(): void;
    setValue(arg0: V): V;
    toString(): string;
}