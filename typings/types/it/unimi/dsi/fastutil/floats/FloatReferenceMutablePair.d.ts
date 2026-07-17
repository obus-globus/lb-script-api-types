import type { FloatReferencePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatReferenceMutablePair<V extends unknown> extends Object implements FloatReferencePair<V>, Serializable {
    static of<V extends unknown>(paramarg0: number, paramarg1: V): FloatReferenceMutablePair<V>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatReferencePair<V>;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatReferencePair<V>;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatReferencePair<V>;
    left(arg0: number): FloatReferenceMutablePair<V>;
    leftFloat(): number;
    right(): V;
    right(arg0: V): FloatReferenceMutablePair<V>;
    toString(): string;
}