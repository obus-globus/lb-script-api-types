import type { MathContext } from '../../../../com/ibm/icu/math/MathContext.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class BigDecimal extends Number implements Serializable, Comparable<BigDecimal> {
    static ONE: BigDecimal;
    static ROUND_CEILING: number;
    static ROUND_DOWN: number;
    static ROUND_FLOOR: number;
    static ROUND_HALF_DOWN: number;
    static ROUND_HALF_EVEN: number;
    static ROUND_HALF_UP: number;
    static ROUND_UNNECESSARY: number;
    static ROUND_UP: number;
    static TEN: BigDecimal;
    static ZERO: BigDecimal;
    static valueOf(paramarg0: number): BigDecimal;
    static valueOf(paramarg0: number): BigDecimal;
    static valueOf(paramarg0: number, paramarg1: number): BigDecimal;
    private constructor()
    constructor(arg0: BigDecimal)
    constructor(arg0: BigInteger)
    constructor(arg0: BigInteger, arg1: number)
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: number, arg2: number)
    constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: string)
    // private exp: number;
    // private form: number;
    // private ind: number;
    // private mant: number[];
    abs(): BigDecimal;
    abs(arg0: MathContext): BigDecimal;
    add(arg0: BigDecimal): BigDecimal;
    add(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    // private bad(arg0: string[]): void;
    // private badarg(arg0: string, arg1: number, arg2: string): void;
    byteValueExact(): number;
    // private checkdigits(arg0: BigDecimal, arg1: number): void;
    compareTo(arg0: BigDecimal): number;
    compareTo(arg0: BigDecimal, arg1: MathContext): number;
    divide(arg0: BigDecimal): BigDecimal;
    divide(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    divide(arg0: BigDecimal, arg1: number): BigDecimal;
    divide(arg0: BigDecimal, arg1: number, arg2: number): BigDecimal;
    divideInteger(arg0: BigDecimal): BigDecimal;
    divideInteger(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    // private dodivide(arg0: string, arg1: BigDecimal, arg2: MathContext, arg3: number): BigDecimal;
    equals(arg0: Object | null): boolean;
    // private finish(arg0: MathContext, arg1: boolean): BigDecimal;
    format(arg0: number, arg1: number): string;
    format(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): string;
    hashCode(): number;
    intValueExact(): number;
    // private intcheck(arg0: number, arg1: number): number;
    // private layout(): string[];
    longValueExact(): number;
    max(arg0: BigDecimal): BigDecimal;
    max(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    min(arg0: BigDecimal): BigDecimal;
    min(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    movePointLeft(arg0: number): BigDecimal;
    movePointRight(arg0: number): BigDecimal;
    multiply(arg0: BigDecimal): BigDecimal;
    multiply(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    negate(): BigDecimal;
    negate(arg0: MathContext): BigDecimal;
    plus(): BigDecimal;
    plus(arg0: MathContext): BigDecimal;
    pow(arg0: BigDecimal): BigDecimal;
    pow(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    remainder(arg0: BigDecimal): BigDecimal;
    remainder(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    // private round(arg0: MathContext): BigDecimal;
    // private round(arg0: number, arg1: number): BigDecimal;
    scale(): number;
    setScale(arg0: number): BigDecimal;
    setScale(arg0: number, arg1: number): BigDecimal;
    shortValueExact(): number;
    signum(): number;
    subtract(arg0: BigDecimal): BigDecimal;
    subtract(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    toBigDecimal(): BigDecimal;
    toBigInteger(): BigInteger;
    toBigIntegerExact(): BigInteger;
    toCharArray(): string[];
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    unscaledValue(): BigInteger;
}