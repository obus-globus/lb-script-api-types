import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../../java/math/BigDecimal.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class NumericValue extends Number {
    static FF_SIZE: number;
    static F_DOUBLE: number;
    static F_FLOAT: number;
    static F_INT: number;
    static F_LONG: number;
    static F_LONGLONG: number;
    static F_UNSIGNED: number;
    constructor(arg0: number, arg1: string)
    readonly base: number;
    // private expbase: number;
    readonly exponent: string;
    readonly flags: number;
    // private fraction: string;
    // private integer: string;
    // private appendFlags(arg0: StringBuilder, arg1: string, arg2: number): boolean;
    // private exponentValue(): number;
    getBase(): number;
    getExponent(): string;
    getExponentBase(): number;
    getFlags(): number;
    getFractionalPart(): string;
    getIntegerPart(): string;
    setExponent(arg0: number, arg1: string): void;
    setFlags(arg0: number): void;
    setFractionalPart(arg0: string): void;
    toBigDecimal(): BigDecimal;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toJavaLangNumber(): Number;
    toLong(): number;
    toString(): string;
}