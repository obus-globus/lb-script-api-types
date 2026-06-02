import type { Rational } from '../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { RoundingMode } from '../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class Real extends Number implements Comparable<Real> {
    static HALF: Real;
    static ONE: Real;
    static TWO: Real;
    static ZERO: Real;
    static of(paramarg0: number): Real;
    static of(paramarg0: BigDecimal): Real;
    static of(paramarg0: BigInteger): Real;
    static of(paramarg0: number): Real;
    constructor(arg0: BigDecimal)
    value: BigDecimal;
    abs(): Real;
    add(arg0: Rational): Real;
    add(arg0: Real): Real;
    add(arg0: BigDecimal): Real;
    add(arg0: BigInteger): Real;
    add(arg0: number): Real;
    add(arg0: number): Real;
    cbrt(): Real;
    ceil(): Real;
    compareTo(arg0: Real): number;
    divide(arg0: Rational): Real;
    divide(arg0: Real): Real;
    divide(arg0: BigDecimal): Real;
    divide(arg0: BigInteger): Real;
    divide(arg0: number): Real;
    divide(arg0: number): Real;
    equals(arg0: Object | null): boolean;
    floor(): Real;
    getScale(): number;
    getValue(): BigDecimal;
    hashCode(): number;
    invert(): Real;
    max(arg0: Real): Real;
    min(arg0: Real): Real;
    multiply(arg0: Rational): Real;
    multiply(arg0: Real): Real;
    multiply(arg0: BigDecimal): Real;
    multiply(arg0: BigInteger): Real;
    multiply(arg0: number): Real;
    multiply(arg0: number): Real;
    negate(): Real;
    nthRoot(arg0: BigInteger): Real;
    nthRoot(arg0: number): Real;
    pow(arg0: Rational): Real;
    pow(arg0: BigInteger): Real;
    pow(arg0: number): Real;
    round(): Real;
    // private setScale(arg0: number): Real;
    setScale(arg0: number, arg1: RoundingMode): Real;
    signum(): number;
    sqrt(): Real;
    strip(): Real;
    subtract(arg0: Rational): Real;
    subtract(arg0: Real): Real;
    subtract(arg0: BigDecimal): Real;
    subtract(arg0: BigInteger): Real;
    subtract(arg0: number): Real;
    subtract(arg0: number): Real;
    toBigDecimal(): BigDecimal;
    toBigInteger(): BigInteger;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toRational(): Rational;
    toString(): string;
}