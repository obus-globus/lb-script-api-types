import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ShortReferencePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortReferenceImmutablePair<V extends unknown> extends Object implements ShortReferencePair<V>, Serializable {
    static of<V extends unknown>(paramarg0: number, paramarg1: V): ShortReferenceImmutablePair<V>;
    static of<V extends unknown>(paramarg0: number, paramarg1: V): ShortReferencePair<V>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortReferencePair<V>;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortReferencePair<V>;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortReferencePair<V>;
    leftShort(): number;
    right(): V;
    right(arg0: V): Pair<number, V>;
    toString(): string;
}