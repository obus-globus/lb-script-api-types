import type { Pair } from '../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export interface SortedPair<K extends Comparable<K>> extends Pair<K, K>, Object{
    contains(arg0: Object): boolean;
    first(): K;
    first(arg0: K): Pair<K, K>;
    key(): K;
    key(arg0: K): Pair<K, K>;
    left(arg0: K): Pair<K, K>;
    right(arg0: K): Pair<K, K>;
    second(): K;
    second(arg0: K): Pair<K, K>;
    value(): K;
    value(arg0: K): Pair<K, K>;
}