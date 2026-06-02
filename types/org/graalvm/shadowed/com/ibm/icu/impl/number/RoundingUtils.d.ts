import type { MathContext } from '../../../../../../../../java/math/MathContext.d.ts'
import type { RoundingMode } from '../../../../../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StandardPlural } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { Precision } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Precision.d.ts'
import type { Scale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Scale.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
export class RoundingUtils extends Object {
    static DEFAULT_MATH_CONTEXT_34_DIGITS: MathContext;
    static DEFAULT_MATH_CONTEXT_UNLIMITED: MathContext;
    static DEFAULT_ROUNDING_MODE: RoundingMode;
    static MAX_INT_FRAC_SIG: number;
    static SECTION_LOWER: number;
    static SECTION_MIDPOINT: number;
    static SECTION_UPPER: number;
    static getMathContextOr34Digits(paramproperties: DecimalFormatProperties): MathContext;
    static getMathContextOrUnlimited(paramproperties: DecimalFormatProperties): MathContext;
    static getPluralSafe(paramrounder: Precision, paramrules: PluralRules, paramdq: DecimalQuantity): StandardPlural;
    static getRoundingDirection(paramisEven: boolean, paramisNegative: boolean, paramsection: number, paramroundingMode: number, paramreference: Object): boolean;
    static mathContextUnlimited(paramroundingMode: RoundingMode): MathContext;
    static roundsAtMidpoint(paramroundingMode: number): boolean;
    static scaleFromProperties(paramproperties: DecimalFormatProperties): Scale;
    constructor()
}