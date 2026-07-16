import type { ByteLongPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteLongImmutablePair extends Object implements ByteLongPair, Serializable {
    static lexComparator(): (param0: ByteLongPair, param1: ByteLongPair) => number;
    static of(paramarg0: number, paramarg1: number): ByteLongImmutablePair;
    static of(paramarg0: number, paramarg1: number): ByteLongPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteLongPair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteLongPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteLongPair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): ByteLongPair;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteLongPair;
    valueLong(): number;
}