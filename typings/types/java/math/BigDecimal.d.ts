import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { BigInteger } from '../../java/math/BigInteger.d.ts'
import type { MathContext } from '../../java/math/MathContext.d.ts'
import type { RoundingMode } from '../../java/math/RoundingMode.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Number } from '../../java/lang/Number.d.ts'
export class BigDecimal extends Number implements Comparable<BigDecimal> {
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
    static TWO: BigDecimal;
    static ZERO: BigDecimal;
    static valueOf(paramarg0: number): BigDecimal;
    static valueOf(paramarg0: number): BigDecimal;
    static valueOf(paramarg0: number, paramarg1: number): BigDecimal;
    constructor(arg0: BigInteger)
    constructor(arg0: BigInteger, arg1: MathContext)
    constructor(arg0: BigInteger, arg1: number)
    constructor(arg0: BigInteger, arg1: number, arg2: MathContext)
    constructor(arg0: BigInteger, arg1: number, arg2: number, arg3: number)
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: MathContext)
    constructor(arg0: string[], arg1: number, arg2: number)
    constructor(arg0: string[], arg1: number, arg2: number, arg3: MathContext)
    constructor(arg0: number)
    constructor(arg0: number, arg1: MathContext)
    constructor(arg0: number)
    constructor(arg0: number, arg1: MathContext)
    constructor(arg0: number)
    constructor(arg0: number, arg1: MathContext)
    constructor(arg0: string)
    constructor(arg0: string, arg1: MathContext)
    // private intCompact: number;
    // private intVal: BigInteger;
    // private precision: number;
    // private scale: number;
    // private stringCache: string;
    abs(): BigDecimal;
    abs(arg0: MathContext): BigDecimal;
    add(arg0: BigDecimal): BigDecimal;
    add(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    // private adjustToPreferredScale(arg0: number, arg1: number): BigDecimal;
    // private audit(): BigDecimal;
    // private bigMultiplyPowerTen(arg0: number): BigInteger;
    byteValueExact(): number;
    // private checkScale(arg0: number): number;
    // private compareMagnitude(arg0: BigDecimal): number;
    compareTo(arg0: BigDecimal): number;
    divide(arg0: BigDecimal): BigDecimal;
    divide(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    divide(arg0: BigDecimal, arg1: RoundingMode): BigDecimal;
    divide(arg0: BigDecimal, arg1: number): BigDecimal;
    divide(arg0: BigDecimal, arg1: number, arg2: RoundingMode): BigDecimal;
    divide(arg0: BigDecimal, arg1: number, arg2: number): BigDecimal;
    divideAndRemainder(arg0: BigDecimal): BigDecimal[];
    divideAndRemainder(arg0: BigDecimal, arg1: MathContext): BigDecimal[];
    divideToIntegralValue(arg0: BigDecimal): BigDecimal;
    divideToIntegralValue(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    equals(arg0: Object | null): boolean;
    // private fractionOnly(): boolean;
    // private fullDoubleValue(): number;
    // private fullFloatValue(): number;
    hashCode(): number;
    // private inflated(): BigInteger;
    intValueExact(): number;
    isInteger(): boolean;
    // private isPowerOfTen(): boolean;
    // private layoutChars(arg0: boolean): string;
    longValueExact(): number;
    max(arg0: BigDecimal): BigDecimal;
    min(arg0: BigDecimal): BigDecimal;
    movePointLeft(arg0: number): BigDecimal;
    movePointRight(arg0: number): BigDecimal;
    multiply(arg0: BigDecimal): BigDecimal;
    multiply(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    negate(): BigDecimal;
    negate(arg0: MathContext): BigDecimal;
    plus(): BigDecimal;
    plus(arg0: MathContext): BigDecimal;
    pow(arg0: number): BigDecimal;
    pow(arg0: number, arg1: MathContext): BigDecimal;
    // private preAlign(arg0: BigDecimal, arg1: BigDecimal, arg2: number, arg3: MathContext): BigDecimal[];
    precision(): number;
    // private readObject(arg0: ObjectInputStream): void;
    // private readObjectNoData(): void;
    remainder(arg0: BigDecimal): BigDecimal;
    remainder(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    round(arg0: MathContext): BigDecimal;
    scale(): number;
    scaleByPowerOfTen(arg0: number): BigDecimal;
    setScale(arg0: number): BigDecimal;
    setScale(arg0: number, arg1: RoundingMode): BigDecimal;
    setScale(arg0: number, arg1: number): BigDecimal;
    shortValueExact(): number;
    signum(): number;
    sqrt(arg0: MathContext): BigDecimal;
    // private square(): BigDecimal;
    // private squareRootResultAssertions(arg0: BigDecimal, arg1: MathContext): boolean;
    // private squareRootZeroResultAssertions(arg0: BigDecimal, arg1: MathContext): boolean;
    stripTrailingZeros(): BigDecimal;
    subtract(arg0: BigDecimal): BigDecimal;
    subtract(arg0: BigDecimal, arg1: MathContext): BigDecimal;
    toBigInteger(): BigInteger;
    toBigIntegerExact(): BigInteger;
    toDouble(): number;
    toEngineeringString(): string;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toPlainString(): string;
    toString(): string;
    ulp(): BigDecimal;
    unscaledValue(): BigInteger;
    // private writeObject(arg0: ObjectOutputStream): void;
}