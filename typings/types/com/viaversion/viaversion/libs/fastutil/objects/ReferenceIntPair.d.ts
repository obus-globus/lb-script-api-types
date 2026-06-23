import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ReferenceIntPair<K extends unknown> extends Pair<K, number>, Object{
    first(): K;
    first(arg0: K): Pair<K, number>;
    key(): K;
    key(arg0: K): Pair<K, number>;
    left(arg0: K): Pair<K, number>;
    right(arg0: number): Pair<K, number>;
    right(): number;
    right(arg0: number): ReferenceIntPair<K>;
    rightInt(): number;
    second(): number;
    second(arg0: number): Pair<K, number>;
    second(arg0: number): ReferenceIntPair<K>;
    secondInt(): number;
    value(): number;
    value(arg0: number): Pair<K, number>;
    value(arg0: number): ReferenceIntPair<K>;
    valueInt(): number;
}