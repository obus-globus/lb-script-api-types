import type { ByteReferencePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteReferenceMutablePair<V extends unknown> extends Object implements ByteReferencePair<V>, Serializable {
    static of<V extends unknown>(paramarg0: number, paramarg1: V): ByteReferenceMutablePair<V>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteReferencePair<V>;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteReferencePair<V>;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteReferencePair<V>;
    left(arg0: number): ByteReferenceMutablePair<V>;
    leftByte(): number;
    right(): V;
    right(arg0: V): ByteReferenceMutablePair<V>;
    toString(): string;
}