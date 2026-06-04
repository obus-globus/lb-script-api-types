import type { DoubleReferencePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleReferenceMutablePair<V extends Object | number | string | boolean> extends Object implements DoubleReferencePair<V>, Serializable {
    static of(paramarg0: number, paramarg1: Object | null): DoubleReferenceMutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): DoubleReferencePair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleReferencePair<V>;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleReferencePair<V>;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleReferencePair<V>;
    left(arg0: number): DoubleReferenceMutablePair<V>;
    leftDouble(): number;
    right(): V;
    right(arg0: V): DoubleReferenceMutablePair<V>;
    toString(): string;
}