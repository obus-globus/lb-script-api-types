import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class Fraction extends Number implements Comparable<Fraction> {
    static FOUR_FIFTHS: Fraction;
    static ONE: Fraction;
    static ONE_FIFTH: Fraction;
    static ONE_HALF: Fraction;
    static ONE_QUARTER: Fraction;
    static ONE_THIRD: Fraction;
    static THREE_FIFTHS: Fraction;
    static THREE_QUARTERS: Fraction;
    static TWO_FIFTHS: Fraction;
    static TWO_QUARTERS: Fraction;
    static TWO_THIRDS: Fraction;
    static ZERO: Fraction;
    static getFraction(paramarg0: number): Fraction;
    static getFraction(paramarg0: number, paramarg1: number): Fraction;
    static getFraction(paramarg0: number, paramarg1: number, paramarg2: number): Fraction;
    static getFraction(paramarg0: string): Fraction;
    static getReducedFraction(paramarg0: number, paramarg1: number): Fraction;
    private constructor(arg0: number, arg1: number)
    readonly denominator: number;
    // private hashCode: number;
    readonly numerator: number;
    // private toProperString: string;
    // private toString: string;
    abs(): Fraction;
    add(arg0: Fraction): Fraction;
    // private addSub(arg0: Fraction, arg1: boolean): Fraction;
    compareTo(arg0: Fraction): number;
    divideBy(arg0: Fraction): Fraction;
    equals(arg0: Object | null): boolean;
    getDenominator(): number;
    getNumerator(): number;
    getProperNumerator(): number;
    getProperWhole(): number;
    hashCode(): number;
    invert(): Fraction;
    multiplyBy(arg0: Fraction): Fraction;
    negate(): Fraction;
    pow(arg0: number): Fraction;
    reduce(): Fraction;
    subtract(arg0: Fraction): Fraction;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toProperString(): string;
    toString(): string;
}