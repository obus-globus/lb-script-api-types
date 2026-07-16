import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { BooleanObjectPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanObjectImmutablePair<V extends unknown> extends Object implements BooleanObjectPair<V>, Serializable {
    static lexComparator(): (param0: BooleanObjectPair<Object>, param1: BooleanObjectPair<Object>) => number;
    static of(paramarg0: boolean, paramarg1: Object | null): BooleanObjectImmutablePair<Object>;
    static of(paramarg0: boolean, paramarg1: Object | null): BooleanObjectPair<Object>;
    constructor(arg0: boolean, arg1: V)
    // private left: boolean;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanObjectPair<V>;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanObjectPair<V>;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanObjectPair<V>;
    leftBoolean(): boolean;
    right(): V;
    right(arg0: V): Pair<boolean, V>;
    toString(): string;
}