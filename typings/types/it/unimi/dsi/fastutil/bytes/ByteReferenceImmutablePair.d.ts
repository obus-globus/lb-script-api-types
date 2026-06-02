import type { ByteReferencePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteReferenceImmutablePair<V extends Object | number | string | boolean> extends Object implements ByteReferencePair<V>, Serializable {
    static of(paramarg0: number, paramarg1: Object | null): ByteReferenceImmutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): ByteReferencePair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteReferencePair<V>;
    first(arg0: number): ByteReferencePair<V>;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteReferencePair<V>;
    key(arg0: number): ByteReferencePair<V>;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteReferencePair<V>;
    left(arg0: number): ByteReferencePair<V>;
    leftByte(): number;
    right(): V;
    toString(): string;
}