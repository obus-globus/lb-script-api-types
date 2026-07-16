import type { IntReferencePair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntReferencePair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IntReferenceMutablePair<V extends unknown> extends Object implements IntReferencePair<V>, Serializable {
    static of<V extends unknown>(paramarg0: number, paramarg1: V): IntReferenceMutablePair<V>;
    static of<V extends unknown>(paramarg0: number, paramarg1: V): IntReferencePair<V>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntReferencePair<V>;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntReferencePair<V>;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntReferencePair<V>;
    left(arg0: number): IntReferenceMutablePair<V>;
    leftInt(): number;
    right(): V;
    right(arg0: V): IntReferenceMutablePair<V>;
    toString(): string;
}