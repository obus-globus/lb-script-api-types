import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { RoundingMode } from '../../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class NumberUtils extends Object {
    static BYTE_MINUS_ONE: number;
    static BYTE_ONE: number;
    static BYTE_ZERO: number;
    static DOUBLE_MINUS_ONE: number;
    static DOUBLE_ONE: number;
    static DOUBLE_ZERO: number;
    static FLOAT_MINUS_ONE: number;
    static FLOAT_ONE: number;
    static FLOAT_ZERO: number;
    static INTEGER_MINUS_ONE: number;
    static INTEGER_ONE: number;
    static INTEGER_TWO: number;
    static INTEGER_ZERO: number;
    static LONG_INT_MAX_VALUE: number;
    static LONG_INT_MIN_VALUE: number;
    static LONG_MINUS_ONE: number;
    static LONG_ONE: number;
    static LONG_ZERO: number;
    static SHORT_MINUS_ONE: number;
    static SHORT_ONE: number;
    static SHORT_ZERO: number;
    static compare(paramarg0: number, paramarg1: number): number;
    static createBigDecimal(paramarg0: string): BigDecimal;
    static createBigInteger(paramarg0: string): BigInteger;
    static createDouble(paramarg0: string): number;
    static createFloat(paramarg0: string): number;
    static createInteger(paramarg0: string): number;
    static createLong(paramarg0: string): number;
    static createNumber(paramarg0: string): Number;
    static isCreatable(paramarg0: string): boolean;
    static isDigits(paramarg0: string): boolean;
    static isNumber(paramarg0: string): boolean;
    static isParsable(paramarg0: string): boolean;
    static max(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static max(...paramarg0: number[]): number;
    static min(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static min(...paramarg0: number[]): number;
    static toByte(paramarg0: string): number;
    static toByte(paramarg0: string, paramarg1: number): number;
    static toDouble(paramarg0: string): number;
    static toDouble(paramarg0: string, paramarg1: number): number;
    static toDouble(paramarg0: BigDecimal): number;
    static toDouble(paramarg0: BigDecimal, paramarg1: number): number;
    static toFloat(paramarg0: string): number;
    static toFloat(paramarg0: string, paramarg1: number): number;
    static toInt(paramarg0: string): number;
    static toInt(paramarg0: string, paramarg1: number): number;
    static toLong(paramarg0: string): number;
    static toLong(paramarg0: string, paramarg1: number): number;
    static toScaledBigDecimal(paramarg0: number): BigDecimal;
    static toScaledBigDecimal(paramarg0: number, paramarg1: number, paramarg2: RoundingMode): BigDecimal;
    static toScaledBigDecimal(paramarg0: string): BigDecimal;
    static toScaledBigDecimal(paramarg0: string, paramarg1: number, paramarg2: RoundingMode): BigDecimal;
    static toScaledBigDecimal(paramarg0: BigDecimal): BigDecimal;
    static toScaledBigDecimal(paramarg0: BigDecimal, paramarg1: number, paramarg2: RoundingMode): BigDecimal;
    static toShort(paramarg0: string): number;
    static toShort(paramarg0: string, paramarg1: number): number;
    constructor()
}