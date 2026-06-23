import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ObjectReferencePair<K extends unknown, V extends unknown> extends Pair<K, V>, Object{
    first(): K;
    first(arg0: K): Pair<K, V>;
    key(): K;
    key(arg0: K): Pair<K, V>;
    left(arg0: K): Pair<K, V>;
    right(arg0: V): Pair<K, V>;
    second(): V;
    second(arg0: V): Pair<K, V>;
    value(): V;
    value(arg0: V): Pair<K, V>;
}