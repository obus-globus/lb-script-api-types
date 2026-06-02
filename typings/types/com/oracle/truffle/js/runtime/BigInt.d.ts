import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class BigInt extends Object implements TruffleObject, Comparable<BigInt> {
    static MAX_INT: BigInt;
    static MIN_INT: BigInt;
    static NEGATIVE_ONE: BigInt;
    static ONE: BigInt;
    static ZERO: BigInt;
    static doubleValueOf(paramvalue: BigInteger): number;
    static fromBigInteger(paramvalue: BigInteger): BigInt;
    static fromForeignBigInteger(paramvalue: BigInteger): BigInt;
    static valueOf(params: string): BigInt;
    static valueOf(parami: number): BigInt;
    static valueOfUnsigned(parami: number): BigInt;
    constructor(v: BigInteger)
    private constructor(v: BigInteger, foreign: boolean)
    readonly foreign: boolean;
    // private value: BigInteger;
    abs(): BigInt;
    add(b: BigInt): BigInt;
    and(b: BigInt): BigInt;
    asBigInteger(): BigInteger;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asLong(): number;
    asShort(): number;
    bigIntegerValue(): BigInteger;
    bitLength(): number;
    clearForeign(): BigInt;
    compareTo(b: BigInt): number;
    compareValueTo(b: number): number;
    compareValueTo(b: number): number;
    divide(b: BigInt): BigInt;
    divideAndRemainder(b: BigInt): BigInt[];
    doubleValue(): number;
    equals(obj: Object | null): boolean;
    fitsInBigInteger(): boolean;
    fitsInByte(): boolean;
    fitsInDouble(): boolean;
    fitsInFloat(): boolean;
    fitsInInt(): boolean;
    fitsInLong(): boolean;
    fitsInShort(): boolean;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getMetaObject(): Object;
    hasLanguage(): boolean;
    hasMetaObject(): boolean;
    hashCode(): number;
    intValue(): number;
    isForeign(): boolean;
    isNumber(): boolean;
    longValue(): number;
    longValueExact(): number;
    mod(m: BigInt): BigInt;
    multiply(b: BigInt): BigInt;
    negate(): BigInt;
    not(): BigInt;
    or(b: BigInt): BigInt;
    pow(e: number): BigInt;
    remainder(b: BigInt): BigInt;
    // private setForeign(foreign: boolean): BigInt;
    shiftLeft(b: number): BigInt;
    shiftRight(b: number): BigInt;
    signum(): number;
    subtract(b: BigInt): BigInt;
    testBit(n: number): boolean;
    toBigInt64(): BigInt;
    toBigUint64(): BigInt;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
    toString(radix: number): string;
    toTString(): TruffleString;
    toTString(radix: number): TruffleString;
    xor(b: BigInt): BigInt;
}