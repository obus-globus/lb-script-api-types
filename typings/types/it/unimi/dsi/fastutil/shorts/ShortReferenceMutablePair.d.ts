import type { ShortReferencePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortReferenceMutablePair<V extends Object | number | string | boolean> extends Object implements ShortReferencePair<V>, Serializable {
    static of(paramarg0: number, paramarg1: Object | null): ShortReferenceMutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): ShortReferencePair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortReferencePair<V>;
    first(arg0: number): ShortReferencePair<V>;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortReferencePair<V>;
    key(arg0: number): ShortReferencePair<V>;
    keyShort(): number;
    left(arg0: number): ShortReferenceMutablePair<V>;
    left(): number;
    left(arg0: number): ShortReferencePair<V>;
    left(arg0: number): ShortReferencePair<V>;
    leftShort(): number;
    right(): V;
    right(arg0: V): ShortReferenceMutablePair<V>;
    toString(): string;
}