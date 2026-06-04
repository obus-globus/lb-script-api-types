import type { Rational } from '../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { Real } from '../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Complex extends Object {
    static ONE: Complex;
    static ZERO: Complex;
    static of(paramarg0: Real): Complex;
    static of(paramarg0: Real, paramarg1: Real): Complex;
    static of(paramarg0: number): Complex;
    static of(paramarg0: number, paramarg1: number): Complex;
    static of(paramarg0: BigDecimal): Complex;
    static of(paramarg0: BigDecimal, paramarg1: BigDecimal): Complex;
    static of(paramarg0: BigInteger): Complex;
    static of(paramarg0: BigInteger, paramarg1: BigInteger): Complex;
    static of(paramarg0: number): Complex;
    static of(paramarg0: number, paramarg1: number): Complex;
    constructor(arg0: Real, arg1: Real)
    readonly imaginary: Real;
    readonly real: Real;
    add(arg0: Complex): Complex;
    conjugate(): Complex;
    divide(arg0: Complex): Complex;
    divide(arg0: Rational): Complex;
    divide(arg0: Real): Complex;
    divide(arg0: BigDecimal): Complex;
    divide(arg0: BigInteger): Complex;
    divide(arg0: number): Complex;
    equals(arg0: Object | null): boolean;
    getImaginary(): Real;
    getReal(): Real;
    hashCode(): number;
    invert(): Complex;
    magnitude(): Real;
    magnitudeSq(): Real;
    multiply(arg0: Complex): Complex;
    multiply(arg0: Rational): Complex;
    multiply(arg0: Real): Complex;
    multiply(arg0: BigDecimal): Complex;
    multiply(arg0: BigInteger): Complex;
    multiply(arg0: number): Complex;
    negate(): Complex;
    subtract(arg0: Complex): Complex;
    toString(): string;
}