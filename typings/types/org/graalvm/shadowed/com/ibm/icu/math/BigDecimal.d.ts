import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { BigDecimal as BigDecimal_2 } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { MathContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/math/MathContext.d.ts'
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
    static valueOf(paramdub: number): BigDecimal;
    static valueOf(paramlint: number): BigDecimal;
    static valueOf(paramlint: number, paramscale: number): BigDecimal;
    private constructor()
    constructor(bd: BigDecimal_2)
    constructor(bi: BigInteger)
    constructor(bi: BigInteger, scale: number)
    constructor(inchars: string[])
    constructor(inchars: string[], offset: number, length: number)
    constructor(num: number)
    constructor(num: number)
    constructor(num: number)
    constructor(string: string)
    // private exp: number;
    // private form: number;
    // private ind: number;
    // private mant: number[];
    abs(): BigDecimal;
    abs(set: MathContext): BigDecimal;
    add(rhs: BigDecimal): BigDecimal;
    add(rhs: BigDecimal, set: MathContext): BigDecimal;
    // private bad(s: string[]): void;
    // private badarg(name: string, pos: number, value: string): void;
    byteValueExact(): number;
    // private checkdigits(rhs: BigDecimal, dig: number): void;
    compareTo(rhs: BigDecimal): number;
    compareTo(rhs: BigDecimal, set: MathContext): number;
    divide(rhs: BigDecimal): BigDecimal;
    divide(rhs: BigDecimal, round: number): BigDecimal;
    divide(rhs: BigDecimal, scale: number, round: number): BigDecimal;
    divide(rhs: BigDecimal, set: MathContext): BigDecimal;
    divideInteger(rhs: BigDecimal): BigDecimal;
    divideInteger(rhs: BigDecimal, set: MathContext): BigDecimal;
    // private dodivide(code: string, rhs: BigDecimal, set: MathContext, scale: number): BigDecimal;
    equals(obj: Object | null): boolean;
    // private finish(set: MathContext, strip: boolean): BigDecimal;
    format(before: number, after: number): string;
    format(before: number, after: number, explaces: number, exdigits: number, exformint: number, exround: number): string;
    hashCode(): number;
    intValueExact(): number;
    // private intcheck(min: number, max: number): number;
    // private layout(): string[];
    longValueExact(): number;
    max(rhs: BigDecimal): BigDecimal;
    max(rhs: BigDecimal, set: MathContext): BigDecimal;
    min(rhs: BigDecimal): BigDecimal;
    min(rhs: BigDecimal, set: MathContext): BigDecimal;
    movePointLeft(n: number): BigDecimal;
    movePointRight(n: number): BigDecimal;
    multiply(rhs: BigDecimal): BigDecimal;
    multiply(rhs: BigDecimal, set: MathContext): BigDecimal;
    negate(): BigDecimal;
    negate(set: MathContext): BigDecimal;
    plus(): BigDecimal;
    plus(set: MathContext): BigDecimal;
    pow(rhs: BigDecimal): BigDecimal;
    pow(rhs: BigDecimal, set: MathContext): BigDecimal;
    remainder(rhs: BigDecimal): BigDecimal;
    remainder(rhs: BigDecimal, set: MathContext): BigDecimal;
    // private round(len: number, mode: number): BigDecimal;
    // private round(set: MathContext): BigDecimal;
    scale(): number;
    setScale(scale: number): BigDecimal;
    setScale(scale: number, round: number): BigDecimal;
    shortValueExact(): number;
    signum(): number;
    subtract(rhs: BigDecimal): BigDecimal;
    subtract(rhs: BigDecimal, set: MathContext): BigDecimal;
    toBigDecimal(): BigDecimal_2;
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