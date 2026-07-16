import type { Real } from '../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { RoundingMode } from '../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class Rational extends Number implements Comparable<Rational> {
    static HALF: Rational;
    static ONE: Rational;
    static ZERO: Rational;
    static of(paramarg0: number): Rational;
    static of(paramarg0: BigDecimal): Rational;
    static of(paramarg0: BigInteger): Rational;
    static of(paramarg0: BigInteger, paramarg1: BigInteger): Rational;
    static of(paramarg0: BigInteger, paramarg1: number): Rational;
    static of(paramarg0: number, paramarg1: BigInteger): Rational;
    static of(paramarg0: number, paramarg1: number): Rational;
    constructor(arg0: BigInteger, arg1: BigInteger)
    denominator: BigInteger;
    numerator: BigInteger;
    abs(): Rational;
    add(arg0: Rational): Rational;
    add(arg0: BigDecimal): Rational;
    add(arg0: BigInteger): Rational;
    add(arg0: number): Rational;
    ceil(): Rational;
    compareTo(arg0: Rational): number;
    divide(arg0: Rational): Rational;
    divide(arg0: BigDecimal): Rational;
    divide(arg0: BigInteger): Rational;
    divide(arg0: number): Rational;
    equals(arg0: Object | null): boolean;
    floor(): Rational;
    getDenominator(): BigInteger;
    getNumerator(): BigInteger;
    hashCode(): number;
    invert(): Rational;
    max(arg0: Rational): Rational;
    min(arg0: Rational): Rational;
    multiply(arg0: Rational): Rational;
    multiply(arg0: BigDecimal): Rational;
    multiply(arg0: BigInteger): Rational;
    multiply(arg0: number): Rational;
    negate(): Rational;
    pow(arg0: BigInteger): Rational;
    pow(arg0: number): Rational;
    reduce(): Rational;
    round(): Rational;
    shiftLeft(arg0: number): Rational;
    shiftRight(arg0: number): Rational;
    signum(): number;
    simplify(): Rational;
    subtract(arg0: Rational): Rational;
    subtract(arg0: BigDecimal): Rational;
    subtract(arg0: BigInteger): Rational;
    subtract(arg0: number): Rational;
    toBigDecimal(arg0: number, arg1: RoundingMode): BigDecimal;
    toBigInteger(): BigInteger;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toReal(arg0: number, arg1: RoundingMode): Real;
    toString(): string;
    toString(arg0: number): string;
}