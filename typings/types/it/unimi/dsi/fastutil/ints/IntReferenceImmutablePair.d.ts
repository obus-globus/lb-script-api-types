import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { IntReferencePair } from '../../../../../it/unimi/dsi/fastutil/ints/IntReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntReferenceImmutablePair<V extends Object | number | string | boolean> extends Object implements IntReferencePair<V>, Serializable {
    static of(paramarg0: number, paramarg1: Object | null): IntReferenceImmutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): IntReferencePair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntReferencePair<V>;
    first(arg0: number): IntReferencePair<V>;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntReferencePair<V>;
    key(arg0: number): IntReferencePair<V>;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntReferencePair<V>;
    left(arg0: number): IntReferencePair<V>;
    leftInt(): number;
    right(): V;
    right(arg0: V): Pair<number, V>;
    toString(): string;
}