import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class UnsignedInteger extends Number implements Comparable<UnsignedInteger> {
    static MAX_VALUE: UnsignedInteger;
    static ONE: UnsignedInteger;
    static ZERO: UnsignedInteger;
    static fromIntBits(parambits: number): UnsignedInteger;
    static valueOf(paramstring: string): UnsignedInteger;
    static valueOf(paramstring: string, paramradix: number): UnsignedInteger;
    static valueOf(paramvalue: BigInteger): UnsignedInteger;
    static valueOf(paramvalue: number): UnsignedInteger;
    private constructor(value: number)
    // private value: number;
    bigIntegerValue(): BigInteger;
    compareTo(other: UnsignedInteger): number;
    dividedBy(val: UnsignedInteger): UnsignedInteger;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    minus(val: UnsignedInteger): UnsignedInteger;
    mod(val: UnsignedInteger): UnsignedInteger;
    plus(val: UnsignedInteger): UnsignedInteger;
    times(val: UnsignedInteger): UnsignedInteger;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    toString(radix: number): string;
}