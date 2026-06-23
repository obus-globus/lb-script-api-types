import type { ShortObjectPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortObjectMutablePair<V extends unknown> extends Object implements ShortObjectPair<V>, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: Object | null): ShortObjectMutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): ShortObjectPair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortObjectPair<V>;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortObjectPair<V>;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortObjectPair<V>;
    left(arg0: number): ShortObjectMutablePair<V>;
    leftShort(): number;
    right(): V;
    right(arg0: V): ShortObjectMutablePair<V>;
    toString(): string;
}