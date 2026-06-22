import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { Modifier$Signum } from '../../../../../com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$Operand } from '../../../../../com/ibm/icu/text/PluralRules$Operand.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../../java/math/MathContext.d.ts'
import type { FieldPosition } from '../../../../../java/text/FieldPosition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DecimalQuantity extends PluralRules$IFixedDecimal, Object{
    adjustExponent(arg0: number): void;
    adjustMagnitude(arg0: number): void;
    applyMaxInteger(arg0: number): void;
    copyFrom(arg0: DecimalQuantity): void;
    createCopy(): DecimalQuantity;
    getDigit(arg0: number): number;
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
    populateUFieldPosition(arg0: FieldPosition): void;
    resetExponent(): void;
    roundToIncrement(arg0: BigDecimal, arg1: MathContext): void;
    roundToInfinity(): void;
    roundToMagnitude(arg0: number, arg1: MathContext): void;
    roundToNickel(arg0: number, arg1: MathContext): void;
    setMinFraction(arg0: number): void;
    setMinInteger(arg0: number): void;
    setToBigDecimal(arg0: BigDecimal): void;
    signum(): Modifier$Signum;
    toBigDecimal(): BigDecimal;
    toDouble(): number;
    toExponentString(): string;
    toLong(arg0: boolean): number;
    toPlainString(): string;
}