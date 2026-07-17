import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { MathContext } from '../../../../../../../../java/math/MathContext.d.ts'
import type { FieldPosition } from '../../../../../../../../java/text/FieldPosition.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StandardPlural } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { Modifier$Signum } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$Operand } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Operand.d.ts'
export abstract class DecimalQuantity_AbstractBCD extends Object implements DecimalQuantity {
    constructor()
    explicitExactDouble: boolean;
    exponent: number;
    // private flags: number;
    // private isApproximate: boolean;
    // private lReqPos: number;
    // private origDelta: number;
    // private origDouble: number;
    // private precision: number;
    // private rReqPos: number;
    // private scale: number;
    // private _setToBigDecimal(n: BigDecimal): void;
    // private _setToBigInteger(n: BigInteger): void;
    // private _setToDoubleFast(n: number): void;
    // private _setToInt(n: number): void;
    // private _setToLong(n: number): void;
    adjustExponent(delta: number): void;
    adjustMagnitude(delta: number): void;
    appendDigit(value: number, leadingZeros: number, appendAsInteger: boolean): void;
    applyMaxInteger(maxInt: number): void;
    bcdToBigDecimal(): BigDecimal;
    clear(): DecimalQuantity_AbstractBCD;
    compact(): void;
    // private convertToAccurateDouble(): void;
    copyBcdFrom(_other: DecimalQuantity): void;
    copyFrom(_other: DecimalQuantity): void;
    createCopy(): DecimalQuantity;
    equals(other: Object | null): boolean;
    fitsInLong(): boolean;
    // private fractionCount(): number;
    // private fractionCountWithoutTrailingZeros(): number;
    getDigit(magnitude: number): number;
    getDigitPos(position: number): number;
    getExponent(): number;
    getLowerDisplayMagnitude(): number;
    getMagnitude(): number;
    getPluralOperand(operand: PluralRules$Operand): number;
    getPositionFingerprint(): number;
    getStandardPlural(rules: PluralRules): StandardPlural;
    getUpperDisplayMagnitude(): number;
    hashCode(): number;
    isHasIntegerValue(): boolean;
    isInfinite(): boolean;
    isNaN(): boolean;
    isNegative(): boolean;
    isZeroish(): boolean;
    maxRepresentableDigits(): number;
    multiplyBy(multiplicand: BigDecimal): void;
    negate(): void;
    popFromLeft(numDigits: number): void;
    populateUFieldPosition(fp: FieldPosition): void;
    readBigIntegerToBcd(input: BigInteger): void;
    readIntToBcd(input: number): void;
    readLongToBcd(input: number): void;
    resetExponent(): void;
    roundToIncrement(roundingIncrement: BigDecimal, mathContext: MathContext): void;
    roundToInfinity(): void;
    roundToMagnitude(magnitude: number, mathContext: MathContext): void;
    // private roundToMagnitude(magnitude: number, mathContext: MathContext, nickel: boolean): void;
    roundToNickel(magnitude: number, mathContext: MathContext): void;
    setBcdToZero(): void;
    setDigitPos(position: number, value: number): void;
    setMinFraction(minFrac: number): void;
    setMinInteger(minInt: number): void;
    setToBigDecimal(n: BigDecimal): void;
    setToBigInteger(n: BigInteger): void;
    setToDouble(n: number): void;
    setToInt(n: number): void;
    setToLong(n: number): void;
    shiftLeft(numDigits: number): void;
    shiftRight(numDigits: number): void;
    signum(): Modifier$Signum;
    toBigDecimal(): BigDecimal;
    toDouble(): number;
    toExponentString(): string;
    // private toExponentString(result: StringBuilder): void;
    toFractionLong(includeTrailingZeros: boolean): number;
    toLong(truncateIfOverflow: boolean): number;
    toPlainString(): string;
    toPlainString(result: StringBuilder): void;
    toScientificString(): string;
    toScientificString(result: StringBuilder): void;
    truncate(): void;
}