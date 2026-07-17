import type { DoubleObjectPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleObjectMutablePair<V extends unknown> extends Object implements DoubleObjectPair<V>, Serializable {
    static of<V extends unknown>(paramarg0: number, paramarg1: V): DoubleObjectMutablePair<V>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleObjectPair<V>;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleObjectPair<V>;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleObjectPair<V>;
    left(arg0: number): DoubleObjectMutablePair<V>;
    leftDouble(): number;
    right(): V;
    right(arg0: V): DoubleObjectMutablePair<V>;
    toString(): string;
}