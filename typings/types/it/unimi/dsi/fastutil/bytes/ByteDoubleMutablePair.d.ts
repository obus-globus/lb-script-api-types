import type { ByteDoublePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteDoubleMutablePair extends Object implements ByteDoublePair, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: number): ByteDoubleMutablePair;
    static of(paramarg0: number, paramarg1: number): ByteDoublePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteDoublePair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteDoublePair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteDoublePair;
    left(arg0: number): ByteDoubleMutablePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteDoublePair;
    right(arg0: number): ByteDoubleMutablePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ByteDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteDoublePair;
    valueDouble(): number;
}