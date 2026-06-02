import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class UnsignedLong extends Number implements Comparable<UnsignedLong> {
    static MAX_VALUE: UnsignedLong;
    static ONE: UnsignedLong;
    static ZERO: UnsignedLong;
    static fromLongBits(parambits: number): UnsignedLong;
    static valueOf(paramstring: string): UnsignedLong;
    static valueOf(paramstring: string, paramradix: number): UnsignedLong;
    static valueOf(paramvalue: BigInteger): UnsignedLong;
    static valueOf(paramvalue: number): UnsignedLong;
    private constructor(value: number)
    // private value: number;
    bigIntegerValue(): BigInteger;
    compareTo(o: UnsignedLong): number;
    dividedBy(val: UnsignedLong): UnsignedLong;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    minus(val: UnsignedLong): UnsignedLong;
    mod(val: UnsignedLong): UnsignedLong;
    plus(val: UnsignedLong): UnsignedLong;
    times(val: UnsignedLong): UnsignedLong;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    toString(radix: number): string;
}