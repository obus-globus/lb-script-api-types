import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$Operand } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Operand.d.ts'
export class PluralRules$FixedDecimal extends Number implements Comparable<PluralRules$FixedDecimal>, PluralRules$IFixedDecimal {
    static createWithExponent(paramn: number, paramv: number, parame: number): PluralRules$FixedDecimal;
    static decimals(paramn: number): number;
    static getOperand(paramt: string): PluralRules$Operand;
    constructor(n: number)
    constructor(n: number, v: number)
    constructor(n: number, v: number, f: number)
    constructor(n: number, v: number, f: number, e: number)
    constructor(n: number, v: number, f: number, e: number, c: number)
    constructor(n: number)
    readonly baseFactor: number;
    readonly decimalDigits: number;
    readonly decimalDigitsWithoutTrailingZeros: number;
    // private exponent: number;
    readonly integerValue: number;
    // private isNegative: boolean;
    readonly source: number;
    readonly visibleDecimalDigitCount: number;
    readonly visibleDecimalDigitCountWithoutTrailingZeros: number;
    compareTo(other: PluralRules$FixedDecimal): number;
    equals(arg0: Object | null): boolean;
    getBaseFactor(): number;
    getDecimalDigits(): number;
    getDecimalDigitsWithoutTrailingZeros(): number;
    getIntegerValue(): number;
    getPluralOperand(operand: PluralRules$Operand): number;
    getSource(): number;
    getVisibleDecimalDigitCount(): number;
    getVisibleDecimalDigitCountWithoutTrailingZeros(): number;
    hasIntegerValue(): boolean;
    hashCode(): number;
    isHasIntegerValue(): boolean;
    isInfinite(): boolean;
    isNaN(): boolean;
    isNegative(): boolean;
    // private readObject(in_: ObjectInputStream): void;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
}