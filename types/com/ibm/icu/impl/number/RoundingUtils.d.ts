import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalFormatProperties } from '../../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { Precision } from '../../../../../com/ibm/icu/number/Precision.d.ts'
import type { Scale } from '../../../../../com/ibm/icu/number/Scale.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { MathContext } from '../../../../../java/math/MathContext.d.ts'
import type { RoundingMode } from '../../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RoundingUtils extends Object {
    static DEFAULT_MATH_CONTEXT_34_DIGITS: MathContext;
    static DEFAULT_MATH_CONTEXT_UNLIMITED: MathContext;
    static DEFAULT_ROUNDING_MODE: RoundingMode;
    static MAX_INT_FRAC_SIG: number;
    static SECTION_LOWER: number;
    static SECTION_MIDPOINT: number;
    static SECTION_UPPER: number;
    static getMathContextOr34Digits(paramarg0: DecimalFormatProperties): MathContext;
    static getMathContextOrUnlimited(paramarg0: DecimalFormatProperties): MathContext;
    static getPluralSafe(paramarg0: Precision, paramarg1: PluralRules, paramarg2: DecimalQuantity): StandardPlural;
    static getRoundingDirection(paramarg0: boolean, paramarg1: boolean, paramarg2: number, paramarg3: number, paramarg4: Object): boolean;
    static mathContextUnlimited(paramarg0: RoundingMode): MathContext;
    static roundsAtMidpoint(paramarg0: number): boolean;
    static scaleFromProperties(paramarg0: DecimalFormatProperties): Scale;
    constructor()
}