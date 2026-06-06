import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$Operand } from '../../../../com/ibm/icu/text/PluralRules$Operand.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class PluralRules$FixedDecimal extends Number implements PluralRules$IFixedDecimal, Comparable<PluralRules$FixedDecimal> {
    static createWithExponent(paramarg0: number, paramarg1: number, paramarg2: number): PluralRules$FixedDecimal;
    static decimals(paramarg0: number): number;
    static getOperand(paramarg0: string): PluralRules$Operand;
    private constructor(arg0: PluralRules$FixedDecimal)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: number)
    readonly baseFactor: number;
    readonly decimalDigits: number;
    readonly decimalDigitsWithoutTrailingZeros: number;
    // private exponent: number;
    readonly integerValue: number;
    // private isNegative: boolean;
    readonly source: number;
    readonly visibleDecimalDigitCount: number;
    readonly visibleDecimalDigitCountWithoutTrailingZeros: number;
    compareTo(arg0: PluralRules$FixedDecimal): number;
    equals(arg0: Object | null): boolean;
    getBaseFactor(): number;
    getDecimalDigits(): number;
    getDecimalDigitsWithoutTrailingZeros(): number;
    getIntegerValue(): number;
    getPluralOperand(arg0: PluralRules$Operand): number;
    getSource(): number;
    getVisibleDecimalDigitCount(): number;
    getVisibleDecimalDigitCountWithoutTrailingZeros(): number;
    hasIntegerValue(): boolean;
    hashCode(): number;
    isHasIntegerValue(): boolean;
    isInfinite(): boolean;
    isNaN(): boolean;
    isNegative(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}