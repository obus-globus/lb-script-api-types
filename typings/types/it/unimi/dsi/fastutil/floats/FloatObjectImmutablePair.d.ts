import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { FloatObjectPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatObjectImmutablePair<V extends unknown> extends Object implements FloatObjectPair<V>, Serializable {
    static of<V extends unknown>(paramarg0: number, paramarg1: V): FloatObjectImmutablePair<V>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatObjectPair<V>;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatObjectPair<V>;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatObjectPair<V>;
    leftFloat(): number;
    right(): V;
    right(arg0: V): Pair<number, V>;
    toString(): string;
}