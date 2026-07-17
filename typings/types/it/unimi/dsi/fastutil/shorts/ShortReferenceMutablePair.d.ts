import type { ShortReferencePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortReferenceMutablePair<V extends unknown> extends Object implements ShortReferencePair<V>, Serializable {
    static of<V extends unknown>(paramarg0: number, paramarg1: V): ShortReferenceMutablePair<V>;
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
    left(arg0: number): ShortReferenceMutablePair<V>;
    leftShort(): number;
    right(): V;
    right(arg0: V): ShortReferenceMutablePair<V>;
    toString(): string;
}