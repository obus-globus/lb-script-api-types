import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { Modifier$Signum } from '../../../../../com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$Operand } from '../../../../../com/ibm/icu/text/PluralRules$Operand.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { MathContext } from '../../../../../java/math/MathContext.d.ts'
import type { FieldPosition } from '../../../../../java/text/FieldPosition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    // private _setToBigDecimal(arg0: BigDecimal): void;
    // private _setToBigInteger(arg0: BigInteger): void;
    // private _setToDoubleFast(arg0: number): void;
    // private _setToInt(arg0: number): void;
    // private _setToLong(arg0: number): void;
    adjustExponent(arg0: number): void;
    adjustMagnitude(arg0: number): void;
    appendDigit(arg0: number, arg1: number, arg2: boolean): void;
    applyMaxInteger(arg0: number): void;
    bcdToBigDecimal(): BigDecimal;
    clear(): DecimalQuantity_AbstractBCD;
    compact(): void;
    // private convertToAccurateDouble(): void;
    copyBcdFrom(arg0: DecimalQuantity): void;
    copyFrom(arg0: DecimalQuantity): void;
    createCopy(): DecimalQuantity;
    equals(arg0: Object | null): boolean;
    fitsInLong(): boolean;
    // private fractionCount(): number;
    // private fractionCountWithoutTrailingZeros(): number;
    getDigit(arg0: number): number;
    getDigitPos(arg0: number): number;
    getExponent(): number;
    getLowerDisplayMagnitude(): number;
    getMagnitude(): number;
    getPluralOperand(arg0: PluralRules$Operand): number;
    getPositionFingerprint(): number;
    getStandardPlural(arg0: PluralRules): StandardPlural;
    getUpperDisplayMagnitude(): number;
    isHasIntegerValue(): boolean;
    isInfinite(): boolean;
    isNaN(): boolean;
    isNegative(): boolean;
    isZeroish(): boolean;
    maxRepresentableDigits(): number;
    multiplyBy(arg0: BigDecimal): void;
    negate(): void;
    popFromLeft(arg0: number): void;
    populateUFieldPosition(arg0: FieldPosition): void;
    readBigIntegerToBcd(arg0: BigInteger): void;
    readIntToBcd(arg0: number): void;
    readLongToBcd(arg0: number): void;
    resetExponent(): void;
    roundToIncrement(arg0: BigDecimal, arg1: MathContext): void;
    roundToInfinity(): void;
    roundToMagnitude(arg0: number, arg1: MathContext): void;
    // private roundToMagnitude(arg0: number, arg1: MathContext, arg2: boolean): void;
    roundToNickel(arg0: number, arg1: MathContext): void;
    setBcdToZero(): void;
    setDigitPos(arg0: number, arg1: number): void;
    setMinFraction(arg0: number): void;
    setMinInteger(arg0: number): void;
    setToBigDecimal(arg0: BigDecimal): void;
    setToBigInteger(arg0: BigInteger): void;
    setToDouble(arg0: number): void;
    setToInt(arg0: number): void;
    setToLong(arg0: number): void;
    shiftLeft(arg0: number): void;
    shiftRight(arg0: number): void;
    signum(): Modifier$Signum;
    toBigDecimal(): BigDecimal;
    toDouble(): number;
    toExponentString(): string;
    // private toExponentString(arg0: StringBuilder): void;
    toFractionLong(arg0: boolean): number;
    toLong(arg0: boolean): number;
    toPlainString(): string;
    toPlainString(arg0: StringBuilder): void;
    toScientificString(): string;
    toScientificString(arg0: StringBuilder): void;
    truncate(): void;
}