import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatObjectPair<V extends Object | number | string | boolean> extends Pair<number, V>, Object{
    first(): number;
    first(arg0: number): Pair<number, V>;
    first(arg0: number): FloatObjectPair<V>;
    firstFloat(): number;
    key(): number;
    key(arg0: number): Pair<number, V>;
    key(arg0: number): FloatObjectPair<V>;
    keyFloat(): number;
    left(arg0: number): Pair<number, V>;
    left(): number;
    left(arg0: number): FloatObjectPair<V>;
    leftFloat(): number;
    right(arg0: V): Pair<number, V>;
    second(): V;
    second(arg0: V): Pair<number, V>;
    value(): V;
    value(arg0: V): Pair<number, V>;
}