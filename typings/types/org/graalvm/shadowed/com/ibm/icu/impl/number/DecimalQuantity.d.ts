import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../../../../../java/math/MathContext.d.ts'
import type { FieldPosition } from '../../../../../../../../java/text/FieldPosition.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StandardPlural } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { Modifier$Signum } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
export interface DecimalQuantity extends Object, PluralRules$IFixedDecimal{
    adjustExponent(delta: number): void;
    adjustMagnitude(delta: number): void;
    applyMaxInteger(maxInt: number): void;
    copyFrom(other: DecimalQuantity): void;
    createCopy(): DecimalQuantity;
    getDigit(magnitude: number): number;
    getExponent(): number;
    getLowerDisplayMagnitude(): number;
    getMagnitude(): number;
    getPositionFingerprint(): number;
    getStandardPlural(rules: PluralRules): StandardPlural;
    getUpperDisplayMagnitude(): number;
    isInfinite(): boolean;
    isNaN(): boolean;
    isNegative(): boolean;
    isZeroish(): boolean;
    maxRepresentableDigits(): number;
    multiplyBy(multiplicand: BigDecimal): void;
    negate(): void;
    populateUFieldPosition(fp: FieldPosition): void;
    resetExponent(): void;
    roundToIncrement(roundingInterval: BigDecimal, mathContext: MathContext): void;
    roundToInfinity(): void;
    roundToMagnitude(roundingMagnitude: number, mathContext: MathContext): void;
    roundToNickel(magnitude: number, mathContext: MathContext): void;
    setMinFraction(minFrac: number): void;
    setMinInteger(minInt: number): void;
    setToBigDecimal(input: BigDecimal): void;
    signum(): Modifier$Signum;
    toBigDecimal(): BigDecimal;
    toDouble(): number;
    toExponentString(): string;
    toLong(truncateIfOverflow: boolean): number;
    toPlainString(): string;
}