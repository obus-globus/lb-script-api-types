import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { BooleanObjectPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanObjectImmutablePair<V extends unknown> extends Object implements BooleanObjectPair<V>, Serializable {
    static lexComparator<V extends unknown>(): (param0: BooleanObjectPair<V>, param1: BooleanObjectPair<V>) => number;
    static of<V extends unknown>(paramarg0: boolean, paramarg1: V): BooleanObjectImmutablePair<V>;
    static of<V extends unknown>(paramarg0: boolean, paramarg1: V): BooleanObjectPair<V>;
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