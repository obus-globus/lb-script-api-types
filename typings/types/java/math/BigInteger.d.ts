import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Number } from '../../java/lang/Number.d.ts'
export class BigInteger extends Number implements Comparable<BigInteger> {
    static ONE: BigInteger;
    static TEN: BigInteger;
    static TWO: BigInteger;
    static ZERO: BigInteger;
    static probablePrime(paramarg0: number, paramarg1: Random): BigInteger;
    static valueOf(paramarg0: number): BigInteger;
    constructor(arg0: number[])
    private constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: number)
    constructor(arg0: string[], arg1: number, arg2: number)
    constructor(arg0: number, arg1: Random)
    constructor(arg0: number, arg1: number[])
    constructor(arg0: number, arg1: number[], arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: Random)
    private constructor(arg0: number, arg1: number[])
    private constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    private constructor(arg0: number)
    private constructor(arg0: number, arg1: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    // private bitCountPlusOne: number;
    // private lowestSetBitPlusTwo: number;
    // private mag: number[];
    // private magBitLengthPlusOne: number;
    // private numberOfTrailingZeroIntsPlusTwo: number;
    // private signum: number;
    abs(): BigInteger;
    add(arg0: BigInteger): BigInteger;
    add(arg0: number): BigInteger;
    and(arg0: BigInteger): BigInteger;
    andNot(arg0: BigInteger): BigInteger;
    bitCount(): number;
    bitLength(): number;
    byteValueExact(): number;
    // private checkRange(): void;
    clearBit(arg0: number): BigInteger;
    compareMagnitude(arg0: BigInteger): number;
    compareMagnitude(arg0: number): number;
    compareTo(arg0: BigInteger): number;
    divide(arg0: BigInteger): BigInteger;
    divideAndRemainder(arg0: BigInteger): BigInteger[];
    // private divideAndRemainderBurnikelZiegler(arg0: BigInteger): BigInteger[];
    // private divideAndRemainderKnuth(arg0: BigInteger): BigInteger[];
    // private divideBurnikelZiegler(arg0: BigInteger): BigInteger;
    // private divideKnuth(arg0: BigInteger): BigInteger;
    equals(arg0: Object | null): boolean;
    // private exactDivideBy3(): BigInteger;
    flipBit(arg0: number): BigInteger;
    gcd(arg0: BigInteger): BigInteger;
    // private getInt(arg0: number): number;
    // private getLower(arg0: number): BigInteger;
    getLowestSetBit(): number;
    // private getToomSlice(arg0: number, arg1: number, arg2: number, arg3: number): BigInteger;
    // private getUpper(arg0: number): BigInteger;
    hashCode(): number;
    // private intLength(): number;
    intValueExact(): number;
    isProbablePrime(arg0: number): boolean;
    longValueExact(): number;
    // private magBitLength(): number;
    // private magSerializedForm(): number[];
    max(arg0: BigInteger): BigInteger;
    min(arg0: BigInteger): BigInteger;
    mod(arg0: BigInteger): BigInteger;
    // private mod2(arg0: number): BigInteger;
    modInverse(arg0: BigInteger): BigInteger;
    modPow(arg0: BigInteger, arg1: BigInteger): BigInteger;
    // private modPow2(arg0: BigInteger, arg1: number): BigInteger;
    multiply(arg0: BigInteger): BigInteger;
    // private multiply(arg0: BigInteger, arg1: boolean, arg2: boolean, arg3: number): BigInteger;
    multiply(arg0: number): BigInteger;
    negate(): BigInteger;
    nextProbablePrime(): BigInteger;
    not(): BigInteger;
    // private numberOfTrailingZeroInts(): number;
    // private oddModPow(arg0: BigInteger, arg1: BigInteger): BigInteger;
    or(arg0: BigInteger): BigInteger;
    parallelMultiply(arg0: BigInteger): BigInteger;
    // private parseInt(arg0: string[], arg1: number, arg2: number): number;
    // private passesLucasLehmer(): boolean;
    // private passesMillerRabin(arg0: number, arg1: Random): boolean;
    pow(arg0: number): BigInteger;
    primeToCertainty(arg0: number, arg1: Random): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    // private readObjectNoData(): void;
    remainder(arg0: BigInteger): BigInteger;
    // private remainderBurnikelZiegler(arg0: BigInteger): BigInteger;
    // private remainderKnuth(arg0: BigInteger): BigInteger;
    setBit(arg0: number): BigInteger;
    shiftLeft(arg0: number): BigInteger;
    shiftRight(arg0: number): BigInteger;
    // private shiftRightImpl(arg0: number): BigInteger;
    shortValueExact(): number;
    // private signBit(): number;
    // private signInt(): number;
    signum(): number;
    // private smallToString(arg0: number, arg1: StringBuilder, arg2: number): void;
    sqrt(): BigInteger;
    sqrtAndRemainder(): BigInteger[];
    // private square(): BigInteger;
    // private square(arg0: boolean, arg1: boolean, arg2: number): BigInteger;
    // private squareKaratsuba(): BigInteger;
    // private squareToomCook3(arg0: boolean, arg1: number): BigInteger;
    subtract(arg0: BigInteger): BigInteger;
    testBit(arg0: number): boolean;
    toByteArray(): number[];
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    toString(arg0: number): string;
    // private writeObject(arg0: ObjectOutputStream): void;
    xor(arg0: BigInteger): BigInteger;
}