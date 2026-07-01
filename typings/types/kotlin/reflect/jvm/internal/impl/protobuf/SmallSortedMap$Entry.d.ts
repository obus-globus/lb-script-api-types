import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class SmallSortedMap$Entry{
    constructor(null_: Map<Comparable<K>, Object>, arg1: Comparable<K>, arg2: Object)
    constructor(null_: Map<Comparable<K>, Object>, arg1: Map$Entry<Comparable<K>, Object>)
    readonly key: K;
    readonly key: K;
    readonly value: V;
    readonly value: V;
    compareTo<K extends Comparable<K>, V extends unknown>(arg0: SmallSortedMap$Entry): number;
    // private equals(arg0: Object, arg1: Object): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}