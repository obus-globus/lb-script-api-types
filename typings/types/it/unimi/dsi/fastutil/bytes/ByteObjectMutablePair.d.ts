import type { ByteObjectPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteObjectMutablePair<V extends Object | number | string | boolean> extends Object implements ByteObjectPair<V>, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: Object | null): ByteObjectMutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): ByteObjectPair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteObjectPair<V>;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteObjectPair<V>;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteObjectPair<V>;
    left(arg0: number): ByteObjectMutablePair<V>;
    leftByte(): number;
    right(): V;
    right(arg0: V): ByteObjectMutablePair<V>;
    toString(): string;
}