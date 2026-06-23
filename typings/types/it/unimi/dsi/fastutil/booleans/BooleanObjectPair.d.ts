import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanObjectPair<V extends unknown> extends Pair<boolean, V>, Object{
    first(): boolean;
    first(arg0: boolean): Pair<boolean, V>;
    first(arg0: boolean): BooleanObjectPair<V>;
    firstBoolean(): boolean;
    key(): boolean;
    key(arg0: boolean): Pair<boolean, V>;
    key(arg0: boolean): BooleanObjectPair<V>;
    keyBoolean(): boolean;
    left(arg0: boolean): Pair<boolean, V>;
    left(): boolean;
    left(arg0: boolean): BooleanObjectPair<V>;
    leftBoolean(): boolean;
    right(arg0: V): Pair<boolean, V>;
    second(): V;
    second(arg0: V): Pair<boolean, V>;
    value(): V;
    value(arg0: V): Pair<boolean, V>;
}