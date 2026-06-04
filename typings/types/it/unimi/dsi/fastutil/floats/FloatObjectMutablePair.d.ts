import type { FloatObjectPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatObjectMutablePair<V extends Object | number | string | boolean> extends Object implements FloatObjectPair<V>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: Object | null): FloatObjectMutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): FloatObjectPair<Object>;
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
    left(arg0: number): FloatObjectMutablePair<V>;
    leftFloat(): number;
    right(): V;
    right(arg0: V): FloatObjectMutablePair<V>;
    toString(): string;
}