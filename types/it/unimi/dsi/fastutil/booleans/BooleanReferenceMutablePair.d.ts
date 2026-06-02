import type { BooleanReferencePair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanReferenceMutablePair<V extends Object | number | string | boolean> extends Object implements BooleanReferencePair<V>, Serializable {
    static of(paramarg0: boolean, paramarg1: Object | null): BooleanReferenceMutablePair<Object>;
    static of(paramarg0: boolean, paramarg1: Object | null): BooleanReferencePair<Object>;
    constructor(arg0: boolean, arg1: V)
    // private left: boolean;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanReferencePair<V>;
    first(arg0: boolean): BooleanReferencePair<V>;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanReferencePair<V>;
    key(arg0: boolean): BooleanReferencePair<V>;
    keyBoolean(): boolean;
    left(arg0: boolean): BooleanReferenceMutablePair<V>;
    left(): boolean;
    left(arg0: boolean): BooleanReferencePair<V>;
    left(arg0: boolean): BooleanReferencePair<V>;
    leftBoolean(): boolean;
    right(): V;
    right(arg0: V): BooleanReferenceMutablePair<V>;
    toString(): string;
}