import type { IntBytePair } from '../../../../../it/unimi/dsi/fastutil/ints/IntBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntByteImmutablePair extends Object implements IntBytePair, Serializable {
    static lexComparator(): (param0: IntBytePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): IntByteImmutablePair;
    static of(paramarg0: number, paramarg1: number): IntBytePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntBytePair;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntBytePair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntBytePair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): IntBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntBytePair;
    valueByte(): number;
}