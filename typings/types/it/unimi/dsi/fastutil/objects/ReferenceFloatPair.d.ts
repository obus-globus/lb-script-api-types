import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ReferenceFloatPair<K extends Object | number | string | boolean> extends Pair<K, number>, Object{
    first(): K;
    first(arg0: K): Pair<K, number>;
    key(): K;
    key(arg0: K): Pair<K, number>;
    left(arg0: K): Pair<K, number>;
    right(arg0: number): Pair<K, number>;
    right(): number;
    right(arg0: number): ReferenceFloatPair<K>;
    rightFloat(): number;
    second(): number;
    second(arg0: number): Pair<K, number>;
    second(arg0: number): ReferenceFloatPair<K>;
    secondFloat(): number;
    value(): number;
    value(arg0: number): Pair<K, number>;
    value(arg0: number): ReferenceFloatPair<K>;
    valueFloat(): number;
}